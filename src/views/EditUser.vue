

<template>
    <div class="container">
        <div class="row">
            <div class="col-6 offset-2">
                <h1>ُEdit User</h1>
            </div>

        </div>

        <div class="row">
            <div class="col-6 offset-2">
                <div class="container">
                    <div class="row">
                        <div class="col-12">

                            <div class="form-group">

                                <label>USerName</label>
                                <input type="text" class="form-control" v-model="user.username"/>
                            </div>

                            <div class="form-group">
                                <label>first name</label>
                                <input type="text" class="form-control" v-model="user.firstname"/>
                            </div>

                              <div class="form-group">
                                <label>last name</label>
                                <input type="text" class="form-control" v-model="user.lastname"/>
                            </div>
                        </div>
                    </div>
                </div>


                <button class="btn btn-primary float-left" style="margin-left:12px;" @click="putUser()">Save</button>
                <button class="btn btn-danger float-right" style="margin-right:12px;" @click="deleteUser()">Delete User</button>

            </div>
        </div>

    </div>
</template>

<script>



export default {

    name:"EditUser",
    methods:{

        putUser()
        {

            this.$http.put("https://vujs-firebase-project-default-rtdb.firebaseio.com/users/"+this.$route.params.user.ID+".json",this.user).then(()=>{
                this.$alert("user is updated","operation succeed","Success");
            },
            (error)=>{
                console.log(error);
            }
        
        );

        },
        
        deleteUser(){

            this.$confirm("are you sure that you wnat to delete this user?").then(()=>{

                this.$http.delete("https://vujs-firebase-project-default-rtdb.firebaseio.com/users/"+this.$route.params.user.ID+".json").then(()=>{

                    this.$router.push("AllUsers");
                },
                (error)=>{
                    console.log(error);
                }
            );
            });


        },


    },

    computed:{
        user(){
            return this.$route.params.user;
        },
    },
};
</script>

<style scoped>
.row{
    margin-top: 8px;
}
</style>
