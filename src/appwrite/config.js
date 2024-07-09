// writng the config
import conf from "../conf/conf";
import { Client, Databases, ID, Query, Storage } from "appwrite";
export class Service {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(conf.app_write_url)
      .setProject(conf.app_write_project_id);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    console.log("userId", userId);
    try {
      return await this.databases.createDocument(
        conf.app_write_database_id,
        conf.app_write_collection_id,
        slug,
        {
          title,
          content,
          featureImage: featuredImage,
          status,
          UserId: userId
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.app_write_database_id,
        conf.app_write_collection_id,
        slug,
        {
          title,
          content,
          featuredImage,
          status
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.app_write_database_id,
        conf.app_write_collection_id,
        slug
      );
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.app_write_database_id,
        conf.app_write_collection_id,
        slug
      );
    } catch (err) {
      console.log(err);
    }
  }
  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.app_write_database_id,
        conf.app_write_collection_id,
        queries
      );
    } catch (err) {
      console.log(err);
    }
  }
  // file uplpod method

  async uploadFile(file) {
    console.log("from the config",file);
    try {
      return await this.bucket.createFile(
        conf.app_write_bucket_id,
        ID.unique(),
        file
      );
    } catch (err) {
      console.log(err);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.app_write_bucket_id, fileId);
      return true;
    } catch (err) {
      console.log(err);
      return;
    }
  }
   getFilePreviwe(fileId) {
    console.log(fileId);
    try {
      return  this.bucket.getFilePreview(conf.app_write_bucket_id, fileId);
    } catch (err) {
      console.log(err);
    }
  }
}
// get mumtiple post

const service = new Service();
export default service;
