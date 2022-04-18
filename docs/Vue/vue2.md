# 组件开发Demo

>实现一个列表组件——局部组件和插槽结合使用灵活性更高！

代码实现如下：
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div id="app">
      {{message}} {{message + message}}
      <div :id="message"></div>
      <!-- <ul>
            <todo-item v-for="item in list" :title="item.title" :del="item.del"></todo-item>
        </ul> -->
      <todo-list>
        <todo-item
          @delete="handleDelete(item)"
          v-for="item in list"
          :title="item.title"
          :del="item.del"
        >
          <template v-slot:pre-icon="{value1}">
            <span>前置图标 {{value1}}</span>
          </template>
        </todo-item>
      </todo-list>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script>
      Vue.component("todo-item", {
        props: {
          title: String,
          del: {
            type: Boolean,
            default: false,
          },
        },
        template: `
            <li>
                <slot name="pre-icon" :value1="value"></slot>
                <span v-if="!del">{{title}}</span>
                <span v-else style="text-decoration: line-through">{{title}}</span>
                <slot name="suf-icon">😄</slot>
                <button v-show="!del" @click="handleClick">删除</button>
            </li>
          `,
        data: function () {
          return {
            value: Math.random(),
          };
        },
        methods: {
          handleClick(e) {
            console.log("点击删除按钮");
            this.$emit("delete", this.title);
          },
        },
      });
      //slot 可以插入需要的内容，更加灵活；
      Vue.component("todo-list", {
        template: `
            <ul>
              <slot></slot>
            </ul>
          `,
        data: function () {
          return {};
        },
      });

      var vm = new Vue({
        el: "#app",
        data: {
          message: "hello world",
          list: [
            {
              title: "课程1",
              del: false,
            },
            {
              title: "课程2",
              del: true,
            },
          ],
        },
        methods: {
         //子组件通知父组件 emit-delete事件
          handleDelete(val) {
            val.del = !val.del;
          },
        },
      });
    </script>
  </body>
</html>

```

# 单元测试（jest/test-utils）

[Vue Test Utils](https://v1.test-utils.vuejs.org/zh/)

[jest中文文档](https://jestjs.io/zh-Hans/docs/getting-started)

单元测试如下：

```js
import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

```
