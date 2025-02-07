import fs from "fs-extra";
import * as path from "path";
import * as readline from "readline";

// 交互式获取用户输入
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "请输入组件名（大驼峰格式，如 MyComponent）：",
  async (componentName) => {
    if (!componentName.match(/^[A-Z][a-zA-Z0-9]*$/)) {
      console.error("组件名格式不正确，请使用大驼峰格式，如 MyComponent");
      rl.close();
      return;
    }

    const sourceDir = path.join(
      "src",
      "app",
      "components",
      "template",
      "basic"
    );
    const targetDir = path.join("src", "app", "components", componentName);

    try {
      // 复制目录
      await fs.copy(sourceDir, targetDir);
      console.log(`组件 ${componentName} 复制成功！`);

      // 处理文件重命名
      const renameFiles = [
        "BasicTemplate.mocks.ts",
        "BasicTemplate.stories.tsx",
        "BasicTemplate.tsx",
      ];

      for (const file of renameFiles) {
        const oldPath = path.join(targetDir, file);
        const newPath = path.join(
          targetDir,
          file.replace("BasicTemplate", componentName)
        );
        if (fs.existsSync(oldPath)) {
          await fs.rename(oldPath, newPath);
          console.log(`重命名: ${oldPath} -> ${newPath}`);
        }
      }

      // 处理文件内容替换
      const files = await fs.readdir(targetDir);
      const regex = /BasicTemplate/g;

      for (const file of files) {
        const filePath = path.join(targetDir, file);
        let content = await fs.readFile(filePath, "utf8");
        content = content.replace(regex, componentName);
        await fs.writeFile(filePath, content, "utf8");
        console.log(`修改文件内容: ${filePath}`);
      }

      console.log(`组件 ${componentName} 创建完成！`);
    } catch (error) {
      console.error("操作失败:", error);
    } finally {
      rl.close();
    }
  }
);
