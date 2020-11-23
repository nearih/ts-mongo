import * as Mongoose from 'mongoose';
import { UserModel } from './users/users.model';

let database: Mongoose.Connection;

export const connect = () => {
  // add your own uri below

  const uri ='mongodb://localhost:27017/test'
  console.log()
  console.log({uri})
  console.log()
  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  try {
    
  database = Mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', (err ) => {
    console.log('Error connecting to database');
    console.log(err)
  });


  } catch (error) {
      console.log("error ",error)
  }
  return {
    UserModel,
  };
};

export const disconnect = () => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};
