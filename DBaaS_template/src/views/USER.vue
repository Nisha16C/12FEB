<template>
    <main>
        <div class="container-fluid">
            <div class="page-header min-height-300" style="
            background-image: url('https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80');
            margin-right: -24px;
            margin-left: -34%;
          ">
                <span class="mask bg-gradient-success opacity-6"></span>
            </div>
            <div class="card shadow-lg mt-n6">
                <div class="card-body p-3">
                    <div class="row gx-4">
                        <div class="col-auto">
                            <div class="avatar avatar-xl position-relative">
                                <img src="../assets/img/team-1.jpg" alt="profile_image"
                                    class="shadow-sm w-100 border-radius-lg" />
                            </div>
                        </div>
                        <div class="col-auto my-auto">
                            <div class="h-100">
                                <h5 class="mb-1">New User Create</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="py-4 container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-body">
                            <p class="text-uppercase text-sm">User Information</p>
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="first_name" class="form-control-label">First Name</label>
                                    <argon-input v-model="userData.first_name" type="text" placeholder="First Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="last_name" class="form-control-label">Last Name</label>
                                    <argon-input v-model="userData.last_name" type="text" placeholder="Last Name" />
                                </div>
                                <div class="col-md-6">
                                    <label for="username" class="form-control-label">Username</label>
                                    <argon-input v-model="userData.username" type="text" placeholder="Username" />
                                </div>
                                <div class="col-md-6">
                                    <label for="phone" class="form-control-label">Phone Number</label>
                                    <argon-input v-model="userData.phone" type="text" placeholder="123-456-789" />
                                </div>
                                <div class="col-md-12">
                                    <label for="email" class="form-control-label">Email Address</label>
                                    <argon-input v-model="userData.email" type="email" placeholder="nisha@example.com" />
                                </div>
                                <div class="col-md-12">
                                    <label for="password" class="form-control-label">Password</label>
                                    <argon-input v-model="userData.password" type="password"
                                        placeholder=". . . . . . . ." />
                                </div>
                                <div class="col-md-12">
                                    <label for="cpassword" class="form-control-label">Confirm Password</label>
                                    <argon-input v-model="userData.cpassword" type="password"
                                        placeholder=". . . . . . . ." />
                                </div>
                                <div class=" ">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        <label class="form-check-label" for="flexCheckDefault">
                                            I agree with the <a href="#">terms and conditions</a>.
                                        </label>
                                    </div>
                                </div>

                                <div class="">
                                    <argon-button color="success" size="md" variant="gradient" @click="CreateUser()"
                                        type="button" class="ml-4 btn btn-danger" data-toggle="modal"
                                        data-target="#exampleModal">Create New User</argon-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
</template>
  
<script>
import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
// import ProfileCard from "./components/ProfileCard.vue";
import ArgonInput from "@/components/ArgonInput.vue";
import ArgonButton from "@/components/ArgonButton.vue";
import axios from 'axios';

const body = document.getElementsByTagName("body")[0];

export default {
    name: "USER",
    data() {
        return {
            showMenu: false,
            userData: {
                first_name: '',
                username: '',
                email: '',
                phone: '',
                password: '',
                cpassword: '',
            }
        };
    },
    components: { ArgonInput, ArgonButton },
    methods: {
        CreateUser() {
            const userData = {
                first_name: this.first_name,
                username: this.username,
                email: this.email,
                phone: this.phone,
                password: this.password,
                cpassword: this.cpassword,
            };
            console.log(userData);

            // Make a POST request to create a new user
            axios.post(`http://172.16.1.97:8002/api/v1/users/`, userData)
                .then(response => {
                    // Handle the response, for example, show a success message
                    console.log(response.data);
                })
                .catch(error => {
                    // Handle errors, for example, show an error message
                    console.error(error);
                });
        },

    },

    mounted() {
        this.$store.state.isAbsolute = true;
        setNavPills();
        setTooltip();
    },
    beforeMount() {
        this.$store.state.imageLayout = "profile-overview";
        this.$store.state.showNavbar = false;
        this.$store.state.showFooter = true;
        this.$store.state.hideConfigButton = true;
        body.classList.add("profile-overview");
    },
    beforeUnmount() {
        this.$store.state.isAbsolute = false;
        this.$store.state.imageLayout = "default";
        this.$store.state.showNavbar = true;
        this.$store.state.showFooter = true;
        this.$store.state.hideConfigButton = false;
        body.classList.remove("profile-overview");
    },

};
</script>