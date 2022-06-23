---
lang: zh-CN
title: Ruby简易教程
description: "Ruby简易教程"
---

## 声明类和方法

- 在ruby中没有括号，在想要关闭的地方加上end即可
- 参数可以不加括号，但是推荐加括号

```ruby
# 声明类
class User
  # 构造方法
  def initialize name
    @name=name
  end
  # 声明实例方法
  def hi target
    p "Hi #{target},I am #{@name}"
  end
end
# 创建一个用户
u1=User.new 'shenxin'
p u1 #=> #<User:0x014362b8 @name="shenxin">
# 调用方法
u1.hi 'ruby' #=> Hi ruby,I am shenxin
```

## 数组

```ruby
# 遍历数组
arr=[1,2,3,4,5]
arr.each do |item|
  p item
end
```
- 11111111
