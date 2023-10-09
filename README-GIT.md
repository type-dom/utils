
### 查看说明

        git submodule --help

### 克隆代码时带上子模块

        git clone --recurse-submodules <repository>
        例如：
        git submodule add -f http://xxx/breeze/icons ./breeze/icons


### 添加子模块

        git submodule add <repository> [path/to/submodule]

### 查看子模块

        git submodule

### 初始化子模块

        git submodule init

### 拉取所有子模块

        git submodule foreach --recursive --remote git pull

### 更新子模块

        git submodule update --init --recursive --remote [<path>]
        git submodule foreach git submodule update

### 将子模块切到指定分支

        git submodule set-branch -b master [<path>]

### 删除子模块

        # Remove the submodule entry from .git/config
        git submodule deinit -f path/to/submodule

        # 删除.git/modules文件夹下的相关子模块
        rm -rf .git/modules/breeze/icons

        # Remove the entry in .gitmodules and remove the submodule directory located at path/to/submodule
        git rm -f path/to/submodule
        # or, if you want to leave it in your working tree and have done step 0
        # 清理子模块缓存，即删除对应子模块文件夹的索引
        git rm --cached path/to/submodule  (这里是子模块路径，末尾不用加/) 

        # 删除.gitmodules文件中相关子模块信息

