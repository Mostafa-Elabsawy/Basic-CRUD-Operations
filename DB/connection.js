import moongose from 'mongoose';
export const connectDB = async () =>
{ 
    return moongose.connect(
      "mongodb+srv://mostafaelabsawy:NbgIIBUeJKqXvQH7@cluster0.9vk1zzw.mongodb.net/nti_gig"
    ).then(() => {
      console.log("DataBase connected successfully");
    }).catch((err) => {
      console.log("DataBase connection failed");
    });
}