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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(contact,index) in contacts" :key="index">
              <td>{{contact.first_name}}</td>
              <td>{{contact.last_name}}</td>
              <td>{{contact.phone}}</td>
              <td>{{contact.email}}</td>
              <td colspan="4">{{contact.message}}</td>
              <td>{{contact.createdDate | moment}}</td>
              <td>
                <button
                  class="btn btn-danger btn-sm"
                  @click.prevent="deleteContact(contact._id)"
                >Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
export default {
  data() {
    return {
      contacts: []
    };
  },
  methods: {
    getContacts() {
      this.$http
        .get("contact")
        .then(response => {
          this.contacts = response.data;
          console.log(this.contacts);
        })
        .catch(err => {
          console.log(err);
        });
    },

    deleteContact(id) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this information!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(willDelete => {
        if (willDelete) {
          this.$http
            .delete(`contact/${id}`)
            .then(response => {
              this.$router.push({ path: "/admin/dashboard" });
            })
            .catch(err => {
              console.log(err);
            });
          swal("Poof! This information has been deleted!", {
            icon: "success"
          });
        } else {
          swal("Your information is safe!");
        }
      });
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MMMM Do YYYY, h:mm:ss a");
    }
  },
  created() {
    this.getContacts();
  }
};
</script>

<style>
</style>
