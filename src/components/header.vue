<template>
    <nav>
        <ul>
            <!-- router link and a tag differences
            router link (provided by vue-router) intercepts the click events
            so we don't reload the page. the goal of this is for the app to
            be quicker -->
            <li><router-link to="/" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a New Blog</router-link></li>
            <!-- if we don't use exact, every link that has "/" (so basicaly all links in this e.g.)
            would be highlighted as active. exact makes sure that only the link that we're on
            becomes highlighted -->
        </ul>
    </nav>
</template>

<script>

export default {

}

</script>

<style scoped>

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 10px;
}
.router-link-active{
    background: #eee;
    color: #444;
}

</style>