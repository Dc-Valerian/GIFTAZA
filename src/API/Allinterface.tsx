export interface BusinessData {
  _id: string;
  companyName: string;
  email: string;
  logo: string;
  Balance: string;
  phoneNumber: string; // Changed to string for flexibility
  password: string;
  confirmPassword: string;
  BusinessCode: string;
  status: string;
  TransactionHistory: TransactionEntry[];
  giftCard: GiftCardEntry[];
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface CardData {
  _id: string;
  logo: any;
  BusinessCode: string;
  colour: string;
  moneyWorth: number;
  uniqueID: string;
  name: string;
}

export interface UserDetails {
  name: string;
  username: string; // Consider adding a username field if necessary
  email: string;
  image: string;
  phoneNumber: string; // Changed to string for flexibility
  password: string;
  confirmPassword: string;
  status: string;
  TransactionHistory: TransactionEntry[];
  PurchasedGiftCards: GiftCardEntry[];
}

interface TransactionEntry {
  // Define structure for TransactionHistory
  // For example:
  date: string;
  amount: number;
  // ...
}

interface GiftCardEntry {
  // Define structure for giftCard and PurchasedGiftCards
  // For example:
  cardId: string;
  amount: number;
  // ...
}
