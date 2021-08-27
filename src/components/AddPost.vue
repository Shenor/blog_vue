<template>
    <vs-dialog width="550px" not-center not-close prevent-close v-model="isActiveAddPost">
        <template #header>
          <button class="vs-dialog__close" @click="$emit('close')"><i class="vs-icon-close vs-icon-hover-x"></i></button>
          <h4 class="not-margin">
            Добавить новый пост
          </h4>
        </template>

        <div class="con-content">
          <vs-input
            class="title_input"
            type="text"
            v-model="title"
            label="Заголовок"
          />
          <div class="textarea_wraper">
            <div class="textarea_wraper__title">Краткое описание</div>
            <div class="textarea_container">
              <!-- <div class="textarea_container__label">Кол-во: {{limits.shortDescription}}</div> -->
              <textarea
                v-model="shortDescription"
                rows="2"
                :class="[counterShortDescription > limits.shortDescription ? 'red-color' : '']"></textarea>
              <div
                class="textarea_container__counter"
                :class="[counterShortDescription > limits.shortDescription ? 'textarea_container__counter--warn' : '']">{{counterShortDescription}} / {{limits.shortDescription}}</div>
            </div>
          </div>

          <div class="textarea_wraper">
            <div class="textarea_wraper__title">Описание</div>
            <div class="textarea_container">
              <!-- <div class="textarea_container__label">Кол-во: {{limits.shortDescription}}</div> -->
              <textarea
                v-model="description"
                rows="4"
                :class="[counterDescription > limits.description ? 'red-color' : '']"></textarea>
              <div
                class="textarea_container__counter"
                :class="[counterDescription > limits.description ? 'textarea_container__counter--warn' : '']">{{counterDescription}} / {{limits.description}}</div>
            </div>
          </div>
        </div>

        <template #footer>
          <div class="con-footer">
            <vs-button @click="addPost" success transparent>
              Добавить
            </vs-button>
            <vs-button @click="$emit('close')" dark transparent>
              Закрыть
            </vs-button>
          </div>
        </template>
      </vs-dialog>
</template>

<script>
export default {
    data(){
      return{
        title: '',
        shortDescription: '',
        description: '',
        limits: {
          title: 30,
          shortDescription: 60,
          description: 120
        }
      }
    },
    props: {
      isActiveAddPost: Boolean
    },
    computed: {
      counterShortDescription(){
        return this.shortDescription.length
      },
      counterDescription(){
        return this.description.length
      }
    },
    methods: {
      addPost(){
        if (!this.title || !this.shortDescription || !this.description) return;
        this.$store.commit('addPost', {
          id: Math.floor(Math.random()*1000),
          created_at: new Date(),
          title: this.title,
          description: this.description,
          shortDescription: this.shortDescription,
          comments: []
        })
        this.$vs.notification({
          flat: true,
          color: 'success',
          position: 'top-right',
          text: `Новый пост успешно дабавлен`
        })
        this.$emit('close');
        console.log(this.$store.state);
      }
    }
}
</script>

<style lang="scss" scoped>
.con-footer::v-deep {
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .vs-button {
    margin: 0px;

    &__content {
      padding: 10px 30px !important;
    }
  }
}

.title_input::v-deep{
  margin-bottom: 25px;

  input{
    width: 50%;
  }
}

.textarea_wraper{
  position: relative;
  margin-bottom: 15px;

  &__title{
    padding-left: 13px;
    font-size: 0.75rem;
  }

  .textarea_container{
    border-radius: 6px;
    border: 1px solid rgba(0, 0, 0, 0.08);

    &__label{
      font-size: .7rem;
      padding: 8px;
      padding-bottom: 0px;
      transition: all .25s ease;
    }

    &:focus-within{
      border: 1px solid RGBA(var(--vs-primary), 1) !important;
    }

    &:focus-within .textarea_container__label{
      padding-top: 4px;
      padding-bottom: 4px;
    }

    textarea{
      padding: 8px;
      width: 100%;
      outline: none;
      resize: none;
      border: none;
    }

    &__counter{
      position: absolute;
      right: 14px;
      bottom: 0;
      transform: translateY(100%);
      font-size: .6rem;
      padding: 1px 6px;
      border-radius: 0 0 5px 5px;
      font-weight: 700;
      color: #fff;
      opacity: .3;
      transition: all .25s ease;
      cursor: default;
      background: RGBA(var(--vs-primary), .9);

      &--warn{
        background: RGBA(var(--vs-danger), .9);
      }
    }
  }
}

.red-color{
  color: RGB(var(--vs-danger));
}
</style>