<template>
  <article class="post">
    <header class="post-header">
      <div class="post-title">
        <h1>Post Title</h1>
        <nuxt-link to="/">
          <i class="el-icon-back"></i>
        </nuxt-link>
      </div>

      <div class="post-info">
        <small>
          <i class="el-icon-time"></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class="el-icon-view"></i>
          42
        </small>
      </div>
      <div class="post-image">
        <img src="http://decoretta.ru/images/model-B1-056.jpg" alt="post image">
      </div>
    </header>
    <main class="post-content">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci natus molestias possimus eius quo laudantium soluta et impedit quam consequatur. Qui quas voluptatum architecto aliquid iusto veritatis id, at ab!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci natus molestias possimus eius quo laudantium soluta et impedit quam consequatur. Qui quas voluptatum architecto aliquid iusto veritatis id, at ab!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci natus molestias possimus eius quo laudantium soluta et impedit quam consequatur. Qui quas voluptatum architecto aliquid iusto veritatis id, at ab!
      </p>
    </main>
    <footer>
      <app-comment-form 
        @created="createCommentHandler"
        v-if="canAddComment"
      />

      <div class="comments" v-if="true">
        <app-comment 
          v-for="comment in 4"
          :key="comment"
          :comment="comment"
        />
      </div>
      <div class="text-center" v-else>
        Комментариев нет
      </div>
    </footer>
  </article>
</template>

<script>
import AppComment from '@/components/main/Comment'
import AppCommentForm from '@/components/main/CommentForm'

export default {
  validate ({ params }) {
    return Boolean(params.id)
  },
  components: {
    AppComment,
    AppCommentForm
  },
  data (){
    return {
      canAddComment: true
    }
  },
  methods: {
    createCommentHandler () {
      this.canAddComment = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .post {
    max-width: 600px;
    margin: 0 auto;
  }

  .post-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .5rem;
  }

  .post-image img {
    width: 100%;
    height: auto;
  }

  .post-header {
    margin-bottom: 1.5rem;
  }

  .post-content {
    margin-bottom: 2rem;
  }
</style>