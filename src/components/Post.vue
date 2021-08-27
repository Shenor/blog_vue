<template>
    <vs-row>
        <vs-col class="container" w="12">
        <vs-card class="card" type="3" :data-post-id="item.id">
            <template #title>
                <h3 class="card__title">{{item.title}}</h3>
            </template>
            <template #img>
                <img src="../assets/default.jpg" alt="">
            </template>
            <template #text>
                <div class="card__body">
                     <p>
                        {{item.shortDescription}}
                    </p>
                    <div class="card__body__time">{{formatDate}}</div>
                </div>
            </template>
            <template #interactions>
            <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat'></i>
                <span class="span">
                    {{countComment}}
                </span>
            </vs-button>
            </template>
        </vs-card>
        </vs-col>
    </vs-row>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    props: {
        item: Object
    },
    computed: {
        formatDate(){
            return new Date(this.item.created_at).toLocaleDateString();
        },
        countComment(){
            return this.item.comments.length;
        }
    }

}
</script>

<style lang="scss">
.vs-card__text{
    display: flex;
    flex-direction: column;
    flex: 1 1;
}
</style>

<style lang="scss" scoped>
.card__title{
    margin-bottom: 10px;
}
.card__body{
    display: flex;
    flex-direction: column;
    flex: 1;

    &__time{
        align-self: flex-end;
        margin-top: auto;
        font-size: .7rem;
    }
}

.bx-chat{
    margin-right: 5px;
}
</style>