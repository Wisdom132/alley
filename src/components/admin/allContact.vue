<template>
  <div>
    <div class="row">
      <div class="col-12">
        <table class="table table-responsive-sm table-striped table-sm">
          <thead>
            <tr class="text-center">
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col" colspan="4">Message</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contact,index) in contacts" :key="index">
              <td>{{contact.first_name}}</td>
              <td>{{contact.last_name}}</td>
              <td>{{contact.phone}}</td>
              <td>{{contact.email}}</td>
              <td colspan="4">{{contact.message}}</td>
              <td>{{contact.createdDate}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    getContacts() {
      axios
        .get("http://localhost:3000/contact")
        .then(response => {
          this.contacts = response.data;
          console.log(this.contacts);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getContacts();
  }
};
</script>

<style>
</style>
