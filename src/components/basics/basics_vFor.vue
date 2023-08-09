<script>
export default {
  data() {
    return {
      frontEnds: ["Html", "CSS", "JavaScript"],

      todos: [
        { content: "看電影", complete: true },
        { content: "逛超市", complete: false },
        { content: "打遊戲", complete: true },
      ],
    };
  },
};
</script>

<template>
  <div>
    <ul>
      <li v-for="(frontEnd, index) in frontEnds">
        {{ index }} - {{ frontEnd }}
      </li>

      <li v-for="todo in todos">
        <input
          type="checkbox"
          :checked="todo.complete"
        />{{ todo.content }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;
}

li {
  line-height: 2em;
  font-size: 28px;
}

li input {
  margin-right: 24px;
  line-height: 2em;
  width: 24px;
  height: 24px;
}
</style>
