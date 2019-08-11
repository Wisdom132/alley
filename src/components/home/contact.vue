<template>
    <div>
          <section class="contact-form-area bg-primary">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-6">
							<div class="section-title text-center">
								<h2 class="text-white">Keep in Touch</h2>
								<p class="text-white">Most people who work in an office environment, buy computer products, or have a computer at home have had the “fun” experience of dealing </p>
							</div>
						</div>
					</div>
					<form class="contact-form" @submit.prevent="sendContact">
						<div class="row justify-content-center">
							<div class="col-lg-5 mb-4">
								<input type="text" name="fname" placeholder="Enter your first name" v-model="contact.first_name"  class="common-input" required>
							</div>
							<div class="col-lg-5 mb-4">
								<input type="text" name="email" placeholder="Enter your last name address" v-model="contact.last_name" class="common-input" required>
							</div>
              <div class="col-lg-5 mb-4">
								<input type="text" name="fname" placeholder="Enter your phone number" v-model="contact.phone"  class="common-input" required>
							</div>
							<div class="col-lg-5 mb-4">
								<input type="email" name="email" placeholder="Enter your email address" v-model="contact.email " class="common-input" required>
							</div>
							<div class="col-lg-10">
								<textarea class="common-textarea mt-20" name="message" placeholder="Messege" v-model="contact.message" required></textarea>
							</div>
							<div class="col-lg-10 d-flex justify-content-end">
								<button class="btn btn-primary btn-sm mt-4 mb-4">Send Message<span class="lnr lnr-arrow-right"></span></button>
								
							</div>
						</div>
					</form>
				</div>
			</section>
            
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      contact:{}
    }
  },
  methods: {
    sendContact() {
        axios.post("http://localhost:3000/contact",this.contact).then(result=> {
          console.log(result)
        }).catch(err=> {
          console.log(err)
        });
        this.contact = {};
        alert("sent")
      }
  }

}
</script>

<style scoped>
.contact-form ::-webkit-input-placeholder {
  color: #fff;
  font-weight: 300;
}

.contact-form :-moz-placeholder {
  color: #fff;
  opacity: 1;
  font-weight: 300;
}

.contact-form ::-moz-placeholder {
  color: #fff;
  opacity: 1;
  font-weight: 300;
}

.contact-form :-ms-input-placeholder {
  color: #fff;
  font-weight: 300;
}

.contact-form ::-ms-input-placeholder {
  color: #fff;
  font-weight: 300;
}

.contact-form .primary-btn {
  background: #fff;
  border: 0px;
}

.contact-form .primary-btn:hover span {
  background: -webkit-linear-gradient(0deg, #fff, #fff);
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
}

.common-input {
  border: 1px solid rgba(255, 255, 255, 0.3);
  line-height: 48px;
  width: 100%;
  display: block;
  background: transparent;
  padding: 0 25px;
  color: #fff;
}

.common-textarea {
  border: 1px solid rgba(255, 255, 255, 0.3);
  width: 100%;
  display: block;
  background: transparent;
  padding: 15px 25px;
  color: #fff;
  height: 150px;
  resize: none;
}

</style>
