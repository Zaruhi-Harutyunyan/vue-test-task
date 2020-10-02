<template>
    <div>
        <b-card
                :title="user.login"
                :img-src="user.avatar_url"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
        >
            <b-card-text>
               <a target="_blank" :href="user.html_url" >{{ user.html_url }}</a>
            </b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        name: 'UserCard',
        props: ['user']
    }
</script>
