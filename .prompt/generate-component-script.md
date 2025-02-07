编写一个 typescript 脚本，完成以下任务：

1. 交互式的方式，要求用户输入<组件名>
2. 复制 `src/app/components/template/basic` 到 `src/app/components` 目录下, 复制后的文件夹名称是: <大驼峰格式组件名>。
3. 重命名文件：
   - 将 `src/app/components/<大驼峰格式组件名>/BasicTemplate.mock.ts` 重命名为：`src/app/components/<大驼峰格式组件名>/<大驼峰格式组件名>.mock.ts`
   - 将 `src/app/components/<大驼峰格式组件名>/BasicTemplate.stories.ts` 重命名为：`src/app/components/<大驼峰格式组件名>/<大驼峰格式组件名>.stories.ts`
   - 将 `src/app/components/<大驼峰格式组件名>/BasicTemplate.ts` 重命名为：`src/app/components/<大驼峰格式组件名>/<大驼峰格式组件名>.ts`
4. 修改文件内容：
   - 将 `src/app/components/<大驼峰格式组件名>` 目录下所有文件中的 `BasicTemplate` 替换为 <大驼峰格式组件名>, 正则匹配：匹配大小写，不匹配整个单词。
