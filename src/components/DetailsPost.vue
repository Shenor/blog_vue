<template>
    <div>
        <vs-dialog overflow-hidden not-center scroll prevent-close not-close width='1000px' v-model="isShowDetailsPost" v-if="isShowDetailsPost">
            <template #header>
                <div class="bar_button">
                    <vs-button
                        gradient
                        inline
                        style="min-width: 80px"
                        warn
                    >
                        <i class='bx bx-edit'></i>
                        <template #animate >
                            Редакт.
                        </template>
                    </vs-button>
                    <vs-button
                        gradient
                        style="min-width: 80px"
                        danger
                        @click="isConfirm = true"
                    >
                        <i class='bx bx-trash' ></i>
                        <template #animate >
                            Удалить
                        </template>
                    </vs-button>
                </div>
                <button class="vs-dialog__close" @click="$emit('close')"><i class="vs-icon-close vs-icon-hover-x"></i></button>
            </template>


            <div class="con-form">
                <h4>{{post.title}}</h4>
                <p>{{post.shortDescription}}</p>
                <p>{{post.description}}</p>
                <div>
                    <h5>Коментарии</h5>
                    <div class="comment_input">
                        <vs-input
                            type="text"
                            v-on:keyup.enter="submitComent"
                            v-model="commentValue"
                            placeholder="Написать комментарий"
                        >
                            <template #icon>
                                <i class='bx bx-comment-add'></i>
                            </template>
                        </vs-input>
                    </div>
                    <CommentManager v-for="comment in post.comments" :key="comment.id" :comment='comment' :postID='post.id' :depth="0"></CommentManager>
                </div>
            </div>

            <template #footer>
            </template>
        </vs-dialog>

        <vs-dialog class="dialog_confirm" width="300px" not-center v-model="isConfirm">
            <template #header>
                <h4 class="not-margin">
                    Подтвердите удаление поста
                </h4>
            </template>

            <template #footer>
                <div class="con-footer">
                    <vs-button @click="del" danger transparent>
                        Удалить
                    </vs-button>
                    <vs-button @click="isConfirm=false" dark transparent>
                        Отмена
                    </vs-button>
                </div>
            </template>
        </vs-dialog>
    </div>
</template>

<script>
import CommentManager from '../components/CommentManager.vue';

export default {
    data(){
        return{
           commentValue: '',
           isConfirm: false
        }
    },
    props: {
        isShowDetailsPost: Boolean,
        post: Object
    },
    components: {
        CommentManager
    },
    methods: {
        del(){
            this.$store.commit('delPost', this.post.id)
            this.isConfirm = false;
            this.$emit('close')
        },
        submitComent(){
            const comment = {
                id: Math.floor(Math.random()*100),
                body: this.commentValue,
                created_at: new Date(),
                author: {
                    id:4,
                    name: 'Allen Dawson',
                    avatar: 'avatar-4.png'
                },
                reply: []
            }
            this.$store.commit('addComment', {postID: this.post.id, comment})
        }
    },
    computed: {
    }
}
</script>

<style >

</style>

<style lang="scss" scoped>
.bar_button{
    display: flex;
}
.dialog_confirm{
    z-index: var(--vs-zindex-1);
}
.con-footer{
    display: flex;
    justify-content: flex-end;
}
.comment_input::v-deep{
    width: 90%;
    margin-bottom: 1.6rem;

    input {
        width: 90%;
    }
}
</style>