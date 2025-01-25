@echo off
chcp 65001 > nul
setlocal enabledelayedexpansion

:: 配置区 ========================
set REPO_PATH="C:\Users\金云涛\Desktop\小古宝藏库"
set GIT_REMOTE="https://github.com/ajin21/vitepress.git"
:: ==============================

title 文档智能覆盖更新器

cd /d %REPO_PATH%

:check_gitignore
if not exist ".gitignore" (
    echo ⚠ 未检测到.gitignore文件，正在创建基础模板...
    (
        echo # 自动生成忽略规则
        echo .DS_Store
        echo Thumbs.db
        echo node_modules/
        echo *.tmp
    ) > .gitignore
)

:check_git
if not exist ".git" (
    echo ⚙ 初始化新仓库...
    git init
    git remote add origin %GIT_REMOTE%
)

:show_ignored
echo 🔍 正在扫描被忽略的文件...
git status --ignored > _temp_ignored.txt
findstr /v /i "ignored" _temp_ignored.txt | findstr /r /v "^$"
del _temp_ignored.txt
echo ----------------------------------------
choice /n /c YN /m "确认要跳过上述被忽略文件？[Y继续/N取消]"
if errorlevel 2 exit

:add_files
echo ⌛ 正在添加未忽略的文件...
git add . 

:commit
set TIMESTAMP=%DATE% %TIME%
set TIMESTAMP=!TIMESTAMP:/=-!
set TIMESTAMP=!TIMESTAMP:.=!
set TIMESTAMP=!TIMESTAMP: =!
git commit -m "智能更新_!TIMESTAMP!" --allow-empty

:force_push
echo 🚀 正在强制推送...
git push -f origin main

if %errorlevel% equ 0 (
    echo ✅ 更新成功！已过滤!ERRORLEVEL!个文件
) else (
    echo ❌ 推送失败，请检查：
    git remote -v
)

pause