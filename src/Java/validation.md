---
cover: /assets/images/cover2.jpg
icon: pen-to-square
date: 2024-06-30
category:
  - Validation
tag:
  - 红
  - 圆
star: true
sticky: true
---
# SpringBoot-Validation
## 基本使用
2. 新建项目: 创建一个`SpringBoot`项目
2. 引入依赖: 在`pom.xml`中添加依赖
> `SpringBoot`案例: `https://docs.spring.io/spring-boot/reference/io/validation.html`
> Jakarta-Validation注解: `https://beanvalidation.org/2.0/spec/#builtinconstraints`
> `Spring-validation文档` `https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/package-summary.html`
```xml
<dependency>
  <groupId>org.springframework.boot</groupId>
  <artifactId>spring-boot-starter-validation</artifactId>
</dependency>
```
2. 指定规则: 在需要指定验证规则的属性/构造方法/其他上面添加规则注解
> 注意: 需要引入`lombok`依赖
```java
@Data
public class AddCourseDto {

    @NotEmpty(message = "课程名称不能为空")
    private String name;

    @NotEmpty(message = "适用人群不能为空")
    @Size(message = "适用人群内容过少",min = 10)
    private String users;
    
    private String tags;

    @NotEmpty(message = "课程分类不能为空")
    private String mt;

    @NotEmpty(message = "课程分类不能为空")
    private String st;

    @NotEmpty(message = "课程等级不能为空")
    private String grade;
    
    private String teachmode;

    
    private String description;

    
    private String pic;

    @NotEmpty(message = "收费规则不能为空")
    private String charge;
    
    private BigDecimal price;

}
```
3. 启用验证: 在类上/方法上/参数前添加`Validated`注解，以开启对类/方法/参数的验证
> `Validated`注解: `https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/validation/annotation/Validated.html`
```java
@RestController
public class CourseBaseInfoController {
    
    @PostMapping("/course")
    public void createCourseBase(@RequestBody @Validated AddCourseDto addCourseDto){
        System.out.println(addCourseDto.getName());
    }
}
```
## 分组校验
1. 定义分组: 新建类`ValidationGroups`
```java
 /**
 * @description 校验分组
 */
public class ValidationGroups {

 public interface Inster{};
 public interface Update{};
 public interface Delete{};
}
```
2. 指定分组: 校验规则注解的`groups`属性用于指定分组，即该规则属于哪个分组
```java
@Data
public class AddCourseDto {
    // 指定规则NotEmpty属于ValidationGroups.Inster组
    @NotEmpty(groups = {ValidationGroups.Inster.class},message = "添加课程名称不能为空")
    @NotEmpty(groups = {ValidationGroups.Update.class},message = "修改课程名称不能为空")
    private String name;

    @NotEmpty(message = "适用人群不能为空")
    @Size(message = "适用人群内容过少",min = 10)
    private String users;

    private String tags;

    @NotEmpty(message = "课程分类不能为空")
    private String mt;

    @NotEmpty(message = "课程分类不能为空")
    private String st;

    @NotEmpty(message = "课程等级不能为空")
    private String grade;

    private String teachmode;
    
    private String description;
    
    private String pic;

    @NotEmpty(message = "收费规则不能为空")
    private String charge;

    private BigDecimal price;

}
```
3. 分组验证: `@Validated`的`value`属性可以指定分组，即指定校验时使用哪个组的校验规则
```java
@RestController
public class CourseBaseInfoController {

    @PostMapping("/course")
    public void createCourseBase(@RequestBody @Validated({ValidationGroups.Inster.class}) AddCourseDto addCourseDto){
        System.out.println(addCourseDto.getName());
    }
}
```