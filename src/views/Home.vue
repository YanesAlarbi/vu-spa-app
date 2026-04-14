
<template>
    <div class="container">
        <div class="row">
            <div class="col-6 offset-2">welcome to vue.js world</div>
        </div>

        <div class="row" style="margin-top:30px;">


            <div class="card" style="width:18rem;">
                <div class="card-body">
                    <h5 class="card-title">Add User</h5>
                    <p class="card-text">Add new user to the firebase website..</p>
                    <router-link class="btn btn-primary" to="/AddUser">Add a User</router-link>

                </div>
            </div>


            <div class="card" style="width:18rem;margin-left:18px;">
                <div class="card-body">
                    <h5 class="card-title">All Users</h5>
                    <p class="card-text">display all users from foirebase website</p>
                    <router-link class="btn btn-primary" to="/AllUsers">Get All Users</router-link>

                </div>


            </div>

            


        </div>
    </div>
</template>

<script>


export default {
   name:"Home_View",
};
</script>
