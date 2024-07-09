import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.app_write_url)
      .setProject(conf.app_write_project_id);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        console.log(userAccount);
        console.log("login", email, password);
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
  async login({ email, password }) {
    try {
      console.log("email pass from auth", email, password);
      return await this.account.createEmailPasswordSession(email, password);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      console.log(user);
      return user;
    } catch (err) {
      console.log("Appwrite service ::getCurrentUser:: error", err);
      throw err;
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (err) {
      console.log("Appwrite service ::logout:: error", err);
      throw err;
    }
  }
}

const authService = new AuthService();
export default authService;
