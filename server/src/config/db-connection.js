import mongoose from 'mongoose';
import config from './';

const db = () => {
	
	const mongoConfig = {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify:false
	}
	mongoose.connect(
		'mongodb+srv://david-crm_11:dhciwXdhXm8w9yC@crmstack-6hfqx.mongodb.net/test?retryWrites=true',
		mongoConfig
	).then(() => {
		    console.log('Conectado a mongo!');

		    const ObjectId = mongoose.Types.ObjectId;
		    ObjectId.prototype.valueOf = function() {
		    return this.toString();
		};
	});
};
export default db;