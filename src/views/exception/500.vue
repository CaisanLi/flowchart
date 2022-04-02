<template>
    <z-result status="500" title="500" sub-title="抱歉，服务器异常，请反馈给管理员">
        <template #extra>
            <z-button type="primary" @click="toHome">
                返回首页
            </z-button>
        </template>
    </z-result>
</template>

<script>
export default {
    name: 'Exception500',
    methods: {
        toHome () {
            window.location.href = '/';
        }
    }
};
</script>
