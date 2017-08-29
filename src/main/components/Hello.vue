<template>
  <div class="hello">
    <h5>Welcome to your Quasar PWA</h5>
    <ul>
      <li><a href="http://quasar-framework.org" target="_blank" rel="noopener">Docs</a></li>
      <li><a href="http://forum.quasar-framework.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://gitter.im/quasarframework/Lobby" target="_blank" rel="noopener">Gitter Chat</a></li>
      <li><a href="https://twitter.com/quasarframework" target="_blank" rel="noopener">Twitter</a></li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class Hello extends Vue {
  private bias: number = 10

  public sub(a: number, b: number): number {
    return a - b
  }

  public sub_with_bias(a: number): number {
    return a - this.bias
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
@import '~variables'

.hello
  margin-top 50px
  a
    color #35495E

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px
</style>
