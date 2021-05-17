import Vue from 'vue';
import Dexie from "dexie";

const blog = new Dexie("MyDatabase");

blog.version(1).stores({
  friends: "++id,name,age"
});

Vue.use(blog);
