# CSS知识点
## 1.flex布局
>display:flex; 在父元素设置，子元素受弹性盒影响，默认排成一行，如果超出一行，按比例压缩 
>
>flex:1; 子元素设置，设置子元素如何分配父元素的空间，flex:1,子元素宽度占满整个父元素
>
>align-items:center 定义子元素在父容器中的对齐方式，center 垂直居中
>
>justify-content:center 设置子元素在父元素中居中，前提是子元素没有把父元素占满，让子元素水平居中。

### 2.css3的新特性
>transtion transition-property 规定设置过渡效果的 CSS 属性的名称。
>
>transition-duration 规定完成过渡效果需要多少秒或毫秒。
>
- transition-timing-function 规定速度效果的速度曲线。
    transition-delay 定义过渡效果何时开始。
    animation属性可以像Flash制作动画一样，通过控制关键帧来控制动画的每一步，实现更为复杂的动画效果。
    ainimation实现动画效果主要由两部分组成：
    通过类似Flash动画中的帧来声明一个动画；
    在animation属性中调用关键帧声明的动画。
    translate 3D建模效果