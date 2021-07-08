<template>
    <div class="a">
        <el-col :span="14" offset="5">
            <el-row></el-row>
            <el-row>
                <h1 align="center" style="color: white">液态金属性能预测</h1>
                <dv-decoration-5 class="line" dur="3" style="width:400px;height:30px"/>
            </el-row>

            <dv-border-box-12>
                <div style="background: rgba(0,0,0,0);">
                    <el-row class="up" :gutter="20">
                        <el-row>
                            <el-col>
                                <h2 align="center" style="color: white; margin-top: 22px;">设置样品成分配比</h2>
                            </el-col>
                        </el-row>

                        <el-col :span="20" :offset="1">
                            <el-row :gutter="20">
                                <el-form ref="form" :model="form" label-width="auto">
                                    <el-col :span="4"><div>
                                        <el-input placeholder="请输入" v-model="form.v_ga">
                                            <template slot="prepend">Ga</template>
                                        </el-input>
                                    </div></el-col>
                                    <el-col :span="4"><div>
                                        <el-input placeholder="请输入" v-model="form.v_in">
                                            <template slot="prepend">In</template>
                                        </el-input>
                                    </div></el-col>
                                    <el-col :span="4"><div>
                                        <el-input placeholder="请输入" v-model="form.v_al">
                                            <template slot="prepend">Al</template>
                                        </el-input>
                                    </div></el-col>
                                    <el-col :span="4"><div>
                                        <el-input placeholder="请输入" v-model="form.v_fe">
                                            <template slot="prepend">Fe</template>
                                        </el-input>
                                    </div></el-col>
                                    <el-col :span="4"><div>
                                        <el-input placeholder="请输入" v-model="form.v_co">
                                            <template slot="prepend">Co</template>
                                        </el-input>
                                    </div></el-col>
                                    <el-col :span="4"><div>
                                        <el-input placeholder="请输入" v-model="form.v_ni">
                                            <template slot="prepend">Ni</template>
                                        </el-input>
                                    </div></el-col>
                                </el-form>
                            </el-row>

                            <!--                    <el-row> </el-row>-->

                            <el-row :gutter="20">
                                <el-col :span="4" :offset="0"><div>
                                    <el-input placeholder="请输入" v-model="form.v_cu">
                                        <template slot="prepend">Cu</template>
                                    </el-input>
                                </div></el-col>
                                <el-col :span="4"><div>
                                    <el-input placeholder="请输入" v-model="form.v_zn">
                                        <template slot="prepend">Zn</template>
                                    </el-input>
                                </div></el-col>
                                <el-col :span="4"><div>
                                    <el-input placeholder="请输入" v-model="form.v_mg">
                                        <template slot="prepend">Mg</template>
                                    </el-input>
                                </div></el-col>
                                <el-col :span="4"><div>
                                    <el-input placeholder="请输入" v-model="form.v_ag">
                                        <template slot="prepend">Ag</template>
                                    </el-input>
                                </div></el-col>
                                <el-col :span="4"><div>
                                    <el-input placeholder="请输入" v-model="form.v_bi">
                                        <template slot="prepend">Bi</template>
                                    </el-input>
                                </div></el-col>
                                <el-col :span="4"><div>
                                    <el-input placeholder="请输入" v-model="form.v_sn">
                                        <template slot="prepend">Sn</template>
                                    </el-input>
                                </div></el-col>
                            </el-row>
                        </el-col>

                        <el-col :span="2">
                            <el-button type="primary" @click="onSubmit" style="width:100px;height: 130px">提交预测</el-button>
                        </el-col>
                    </el-row>
                </div>
            </dv-border-box-12>

            <el-row>
                <h5 align="center" style="color: white; margin-top: 50px">1.选择制备成分 -> 2.输入组分含量 -> 3.提交预测任务 -> 4.云端返回计算结果 </h5>
                <dv-decoration-2 class="line"   style="width:420px;height:5px;"/>
            </el-row>


            <dv-border-box-12>
                <div style="background: rgba(0,0,0,0);padding-bottom: 1px;">
                    <el-row>
                        <el-col>
                            <h2 align="center" style="color: white; margin-top: 22px;">属性计算结果</h2>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="8" offset="3" >
                            <div class="Echarts">
                                <div id="main" style="width: 300px;height:200px;"></div>
                            </div>
                        </el-col>

                        <el-col :span="8" offset="2" >
                            <el-table class="b"
                                      :show-header="false"
                                      :data="tableData"
                                      style="color:white; background-color:rgba(0,0,0,0);">

                                <el-table-column
                                        prop="prop"
                                        label="属性"
                                        width="180">
                                </el-table-column>

                                <el-table-column
                                        prop="name"
                                        label="数值"
                                        width="180">
                                </el-table-column>
                            </el-table>
                        </el-col>
                    </el-row>
                </div>
            </dv-border-box-12>

        </el-col>
    </div>
</template>

<script>
    // import Charts from '@jiaminghi/charts'
    export default {
        data() {
            return {
                form:{
                    v_ga : null,
                    v_in : null,
                    v_al : null,
                    v_fe : null,
                    v_co : null,
                    v_ni : null,

                    v_cu : null,
                    v_zn : null,
                    v_mg : null,
                    v_ag : null,
                    v_bi : null,
                    v_sn : null,
                },
                prop:{
                    hd: '-',
                    v: '-',
                    p: '-',
                    c: '-',
                    k: '-',
                },
                // option:{
                //     radar: {
                //         polygon: true,
                //         indicator: [
                //             { name: '西峡', max: 300 },
                //             { name: '周口', max: 300 },
                //             { name: '南阳', max: 300 },
                //             { name: '驻马店', max: 300 },
                //             { name: '郑州', max: 300 },
                //             { name: '洛阳', max: 300 }
                //         ]
                //     },
                //     series: [
                //         {
                //             type: 'radar',
                //             data: [111, 256, 178, 152, 266, 132],
                //             animationCurve: 'easeOutBack'
                //         }
                //     ]
                // },
            }
        },
        computed:{
            tableData(){
                return [
                    {
                        prop: '密度',
                        name: this.prop.p,
                    }, {
                        prop: '粘度',
                        name: this.prop.v,
                    }, {
                        prop: '电导率',
                        name: this.prop.c,
                    }, {
                        prop: '热导率',
                        name: this.prop.k,
                    },
                    {
                        prop: '硬度',
                        name: this.prop.hd,
                    }]
            }
        },
        name: 'Echarts',
        methods:{
            myEcharts(){
                // 基于准备好的dom，初始化echarts实例
                var myChart = this.$echarts.init(document.getElementById('main'));
                // 指定图表的配置项和数据
                var option = {
                    tooltip: {},
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#000000',
                                backgroundColor: '#ffffff',
                                borderRadius: 20,
                                padding: [0,0]
                            }
                        },
                        indicator: [
                            { name: '密度（g/cm3）', max: 10},
                            { name: '粘度(Pa.s)', max: 10},
                            { name: '电导率(S/m)', max: 10},
                            { name: '热导率W/(m·k)', max: 50},
                            { name: '硬度(HB)', max: 50}
                        ]
                    },
                    series: [{
                        name: '性能预测',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data: [
                            {
                                value: [this.prop.p, this.prop.v, this.prop.c, this.prop.k, this.prop.hd],
                                name: '性能预测'
                            }
                        ]
                    }],

                };

                // 使用刚指定的配置项和数据显示图表。
                myChart.setOption(option);
            },

            // charet() {
            //     const container = document.getElementById('container')
            //     const myChart = new Charts(container)
            //     myChart.setOption(this.option)
            // },


            onSubmit() {
                this.$post("/calculate/entry", this.form).then(function(res){  // {"no":1,"msg":"录入成功！","data":null}
                    console.log(res.data)
                    if(res.no>=1) {
                        // this.tableData[0].name = res.data.hd;
                        this.prop.hd = res.data.hd;  //硬度
                        this.prop.p = res.data.p;  //密度
                        this.prop.c = res.data.c;  //电导率
                        this.prop.k = res.data.k;  //热导率
                        this.prop.v = res.data.v;  //粘度
                        // this.prop = res.data
                        this.myEcharts()
                    }else{
                        this.$confirm(res.msg)
                    }
                }.bind(this));
                console.log('submit!')
            },
        },

        mounted() {
            this.myEcharts();
            // this.charet();
        }

    }
</script>

<style>
    .element{
        width: 50px;
        height: 20px;
        border:1px solid;
        border-radius:3px;
        background: rgba(131, 185, 212, 0.87);
    }

    .el-row {
        margin-bottom: 50px;
    }

    div.a{
        width: 100%;
        height: 1000px;
        background: black;
    }

    div.Echarts{
        position:relative;
        top:10px;
    }

    .line {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }

    .el-table tr,
    .el-table td {
        background-color: transparent !important;
    }
    .el-table::before {
         height: 0px;
    }

    .el-row.up{
        margin-left: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
    }

    .el-input-group__append, .el-input-group__prepend{
        background: #007dff33;
        color: white;
        border-color: #272727;
    }

    .el-input__inner{
        background: #000000;
        color: white;
        border-color: #272727;
    }

</style>
