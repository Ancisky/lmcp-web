<template>

    <div class="app">
        <dv-full-screen-container class="bg-black" >
            <el-row :gutter="20">
                <el-col :span="14" :offset="5">
                    <el-container>
                        <el-header >
                            <dv-border-box-12>
                                <br>
                                <h1 class="title" align="center" >液态金属成分数据录入平台</h1>
                                <dv-decoration-5 class="line" dur="3" style="width:500px;height:15px;"/>
                                <br>
                            </dv-border-box-12>
                        </el-header>

                        <el-container>

                            <el-card shadow="always" style="background: black" >
                                <el-aside width="180px" >
                                    <dv-border-box-8>
                                        <div style="height: auto;width: auto;padding: 20px">
                                            <h1 style="color: white">液态金属简介
                                            </h1>
                                            <br>
                                            <p style="color: white">液态金属是指一种不定型金属，液态金属可看作由正离子流体和自由电子气组成的混合物。
                                                液态金属也是一种不定型、可流动液体的金属。
                                                液态金属成形过程及控制，液态金属充型过程的水力学特性及流动情况充型过程对铸件质量的影响很大可能造成的各种缺陷，
                                                如冷隔、浇不足、夹杂、气孔、夹砂、粘砂等缺陷，都是在液态金属充型不利的情况下产生的。
                                                正确地设计浇注系统使液态金属平稳而又合理地充满型腔，对保证铸件质量起着很重要的作用。
                                                单质中只有水银是液态金属，镓、铷、铯是低熔点金属。</p>
                                        </div>
                                    </dv-border-box-8>
                                </el-aside>

                            </el-card>

                            <el-container>
                                <el-card shadow="always" style="background: black">
                                    <dv-border-box-10 >
                                        <el-main>
                                            <el-form class="form" ref="form" :model="form" label-width="auto">

                                                <el-row>
                                                    <el-col>
                                                        <h1 style="color:white;
                                                        font-size: 18px;
                                                        padding-bottom: 15px;
                                                        padding-top: 15px;}" align="center">成分配比</h1>
                                                    </el-col>
                                                </el-row>

                                                <el-row>
                                                    <el-col :offset="1" :span="12">
                                                        <el-form-item label="样品编号:">
                                                        <el-input v-model="form.id"></el-input>
                                                        </el-form-item>
                                                    </el-col>
                                                </el-row>

                                                <el-row :gutter="5" >
                                                    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
                                                        <el-form-item label="Mg">
                                                            <el-input v-model="form.Mg"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Co">
                                                            <el-input v-model="form.Co"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Zn">
                                                            <el-input v-model="form.Zn"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="In">
                                                            <el-input v-model="form.In"></el-input>
                                                        </el-form-item>
                                                    </div></el-col>

                                                    <el-col :span="6" :offset="1"><div class="grid-content bg-purple-light">
                                                        <el-form-item label="Al">
                                                            <el-input v-model="form.Al"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Ni">
                                                            <el-input v-model="form.Ni"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Ga">
                                                            <el-input v-model="form.Ga"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Sn">
                                                            <el-input v-model="form.Sn"></el-input>
                                                        </el-form-item>
                                                    </div></el-col>

                                                    <el-col :span="6" :offset="1"><div class="grid-content bg-purple">
                                                        <el-form-item label="Fe">
                                                            <el-input v-model="form.Fe"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Cu">
                                                            <el-input v-model="form.Cu"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Ag">
                                                            <el-input v-model="form.Ag"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="Bi">
                                                            <el-input v-model="form.Bi"></el-input>
                                                        </el-form-item>
                                                    </div></el-col>
                                                </el-row>
                                            </el-form>
                                        </el-main>

                                        <div align="center">
                                            <dv-decoration-10 style="width:90%;height:15px;" />
                                        </div>


                                        <el-footer height="300px">
                                            <h1 style="color:white;
                                                       font-size: 18px;
                                                       padding-bottom: 15px;"
                                                align="center">样品性能</h1>
                                            <el-form class="form" ref="form" :model="form" label-width="100px">
                                                <el-row>
                                                    <el-col :span="7" ><div class="1">
                                                        <el-form-item label="密度">
                                                            <el-input class="input" v-model="form.p"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="硬度">
                                                            <el-input v-model="form.hb"></el-input>
                                                        </el-form-item>
                                                    </div></el-col>

                                                    <el-col :span="7" ><div class="1">
                                                        <el-form-item label="热导率">
                                                            <el-input v-model="form.k"></el-input>
                                                        </el-form-item>
                                                        <el-form-item label="粘度">
                                                            <el-input v-model="form.v"></el-input>
                                                        </el-form-item>
                                                    </div></el-col>

                                                    <el-col :span="7" ><div class="1">
                                                        <el-form-item label="电导率">
                                                            <el-input v-model="form.c"></el-input>
                                                        </el-form-item>
                                                    </div></el-col>
                                                </el-row>

                                                <el-form-item align="center" class="box">
                                                    <el-button type="primary" @click="onSubmit">提交</el-button>
                                                    <el-button @click="back">返回</el-button>
                                                </el-form-item>

                                            </el-form>
                                        </el-footer>
                                    </dv-border-box-10>
                                </el-card>

                            </el-container>
                        </el-container>
                    </el-container>
                </el-col>
            </el-row>
        </dv-full-screen-container>
    </div>


</template>


<script>
    // import qs from "qs"
    export default {

        data() {
            return {
                form: {
                    id: null,
                    Mg: null,
                    Al: null,
                    Fe: null,
                    Co: null,
                    Ni: null,
                    Cu: null,
                    Zn: null,
                    Ga: null,
                    Ag: null,
                    In: null,
                    Sn: null,
                    Bi: null,
                    c : null,
                    hb : null,
                    p : null,
                    k : null,
                    v : null,
                }
            }
        },
        methods: {
            onSubmit() {
                this.$post("/data/entry", this.form).then(function(res){  // {"no":1,"msg":"录入成功！","data":null}
                    this.$confirm(res.msg)
                }.bind(this));
                console.log('submit!')
            }
        }
    }
</script>

<style lang="scss" scoped >

    .el-card {
        border: 0;
    }

    div.app{
        width: 100%;
        height: 1000px;
        background: black;
    }

    .line {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
    }

    .el-footer{
        padding-top: 20px;
    }

    .title{
        color: white;
        font-size:25px;
        padding-bottom:4px;
        padding-top:3px;
    }
</style>


<style>
    .el-input__inner{
        background: black !important;
        /*border-top: 0 !important;*/
        /*border-left: 0 !important;*/
        /*border-left: 0 !important;*/
        /*border-right: 0 !important;*/
        border-radius: 0 !important;
        border:0;
        border-bottom: 1px solid #82dcff !important;
    }

    .el-form-item__label {
        color: white !important;
    }

    /*.el_form_item.box{*/
    /*    margin-left: 0px !important;*/
    /*}*/

</style>

