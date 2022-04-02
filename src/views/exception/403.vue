<template>
    <z-result status="403" title="403" sub-title="抱歉，您没有权限访问该页面">
        <template #extra>
            <z-button type="primary" @click="toHome">
                返回首页
            </z-button>
        </template>
    </z-result>
</template>

<script>
export default {
    name: 'Exception403',
    methods: {
        toHome () {
            window.location.href = '/';
        }
    }
};
</script>
