export default interface IOrder {
	id: number;
	customerId: number;
	carId: number;
	from: string;
	until: string;
	totalPrice: number;
	createdAt: string;
	lastUpdate: string;
}