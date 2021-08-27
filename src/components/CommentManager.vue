<template>
    <div>
        <div class="comment_wrapper" :style="indent">
            <div class="comment_img">
                <vs-avatar badge-position="top-right" badge badge-color="#7d33ff">
                    <img :src="getImage" alt="">
                </vs-avatar>
            </div>
            <div class="comment_info">
                <div class="comment_info__name">{{comment.author.name}} - {{comment.id}}</div>
                <span class="comment_info__timespan">{{formatDate}}</span>
            </div>
            <p class="comment_text">{{comment.body}}</p>
            <div class="comment_actions">
                <div class="comment_actions__answer" @click="isShowReplyInput = !isShowReplyInput"><i class='bx bx-comment'></i> Ответить</div>
            </div>
            <div v-if="isShowReplyInput" class="comment_input">
                <vs-input
                    type="text"
                    v-on:keyup.enter="submitReply"
                    v-model="replyValue"
                    placeholder="Написать комментарий"
                >
                    <template #icon>
                        <i class='bx bx-comment-add'></i>
                    </template>
                </vs-input>
            </div>
        </div>
        <div v-if="comment.reply">
            <comment-manager v-for="reply in comment.reply" :key="reply.id" :comment="reply" :postID='postID' :depth='depth + 1'></comment-manager>
        </div>
    </div>
</template>

<script>
export default {
    name: 'comment-manager',
    data(){
        return{
            isShowReplyInput: false,
            replyValue: ''
        }
    },
    props: ['depth', 'comment', 'postID'],
    computed: {
        getImage(){
            return require('../assets/avatars/' + this.comment.author.avatar);
        },
        formatDate(){
            return `${new Date(this.comment.created_at).toLocaleDateString()} в 
                    ${new Date(this.comment.created_at).toLocaleTimeString({
                        hour: '2-digit',
                        minute: '2-digit'})
                    }`;
        },
        indent(){
            return {
                'margin-left': `${this.depth * 25}px`,
                'padding-left': this.depth ? `10px`: '',
                'border-left':  this.depth ? '1px solid #595959' : ''
            }
        }
    },
    methods: {
        submitReply(){
            const reply = {
                id: Math.floor(Math.random()*100),
                body: this.replyValue,
                created_at: new Date(),
                author: {
                    id:4,
                    name: 'Allen Dawson',
                    avatar: 'avatar-4.png'
                },
                reply: []
            }
            this.$store.commit('addReplyComment', {
                postID: this.postID,
                commentID: this.comment.id,
                reply
            })
            this.isShowReplyInput = !this.isShowReplyInput;
        }
    }
}
</script>

<style lang="scss" scoped>
.comment_wrapper{
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: 50px 1fr 20px;
    column-gap: 5px;
    margin-bottom: 20px;

    .comment_img{
        display: flex;
        place-items: center;
    }

    .comment_info{
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        &__name{
            font-weight: 700;
        }
        &__timespan{
            font-size: .8rem;
            color: #595959;
        }
    }

    .comment_text{
        grid-column: 1/3;
        padding: 0 5px;
    }

    .comment_actions{
        grid-column: 1/3;
        padding: 0 5px;

        &__answer{
            display: flex;
            align-items: center;
            cursor: pointer;
            color: #595959;
            font-size: .9rem;

            &:hover{
                color: RGB(var(--vs-primary));
            }
        }
    }

    .comment_input::v-deep{
        grid-column: 1/3;
        width: 90%;
        margin-top: 5px;

        input {
            width: 90%;
        }
    }
}
</style>