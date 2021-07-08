<template>
    <div>
        <dv-charts :option="option" />
    </div>

</template>

<script>
    // import Charts from '@jiaminghi/charts'
    // const container = document.getElementById('container')
    // const MChart = new Charts(container)
    export default {
        title: {
            text: '剩余油量表',
            style: {
                fill: '#fff'
            }
        },
        series: [
            {
                type: 'gauge',
                data: [ { name: 'itemA', value: 55 } ],
                center: ['50%', '55%'],
                axisLabel: {
                    formatter: '{value}%',
                    style: {
                        fill: '#fff'
                    }
                },
                axisTick: {
                    style: {
                        stroke: '#fff'
                    }
                },
                animationCurve: 'easeInOutBack'
            }
        ]
    }

</script>

<style scoped>

</style>