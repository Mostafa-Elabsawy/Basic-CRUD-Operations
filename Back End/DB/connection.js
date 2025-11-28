import moongose from 'mongoose';
export const connectDB = async () =>
{ 
    return moongose.connect(
      "DataBase URL here"
    ).then(() => {
      console.log("DataBase connected successfully");
    }).catch((err) => {
      console.log("DataBase connection failed");
    });
}
