<template>
    <z-result status="404" title="404" sub-title="抱歉，页面不存在">
        <template #extra>
            <z-button type="primary" @click="toHome">
                返回首页
            </z-button>
        </template>
    </z-result>
</template>

<script>
export default {
    name: 'Exception404',
    methods: {
        toHome () {
            window.location.href = '/';
        }
    }
};
</script>
