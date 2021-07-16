<template>
<!-- binding은 v-model, event는 @click @change, 
멀티데이터 v-for, 조건에 따라 랜더링 여부 결정 v-if (랜더링도 안함), 
v-show는 무조건 랜더링은 하지만 안보이거나 보이게 할 수 있음 (v-if랑 비슷)-->
    <!-- v-if와 v-show는 용도에 맞게 적절히 사용하애한다.  (리소스문제)-->
    <div>
        <h1>welcome to {{title}}!</h1>
        <!-- 사용자가 입력한 데이터 받아올 수 있어야 함 -->
        <!-- vue는 value 대신 v-model이란 것 안에 data를 바인딩하고 처리 가능 -->
        <input type="text" v-model="input1" />

        <!-- vue에서는 onclick 대신 @click으로 바인딩을 함 (method 호출)-->
        <!-- 또한 vue.js는 1 way가 아닌 2 way 바인딩을 지원함. 이를 보이기 위해 button 추가함 -->
        <button type="button" @click="getData">Get</button>
        <button type="button" @click="setData">Set</button>

        <!-- select box -->
        <!-- 배열형태는 ㅍv-for를 이용해서 option이란 data에 접근해서 
        하나씩 data와 insex 가져올 수 있다-->
        <select class="form-control" v-model="region" @change="changeRegion">
            <!-- key를 무조건 넣어주어야 함
            배열로 돌아가므로 유일한 값(index)으로 key 설정 -->
            <!-- :value -> value에 v값이 할당이 됨 -->
            <!-- :을 쓰면 데이터 변수에 바로 접근 가능 -->
            <option :key="i" :value="d.v" v-for="(d, i) in options">{{d.t}}</option>
        </select>

        <!-- table도 동일 -->
        <!-- tr: 행, td: 열 -->
        <table class="table table-bordered" v-if="tableShow">
            <tr :key="i" v-for="(d, i) in options"></tr>
                <td>{{d.v}}</td>
                <td>{{d.t}}</td>
        </table>
    </div>
</template>

<script>
export default {
    
    // data handling이 매우 중요
    // 우리가 원하는대로 control 하기위해 개발을 하는 것이다
    // data라는 메소드 정의 -> return : control하고싶은 data 입력
    data() {
        return {
            title: "개발자의 품격",
            title2: "Seoul",
            input1: "abc",
            // data가 배열, select box에서 리스트를 뿌려야할 때 보자
            // 이렇게 리스트가 있다고 가정
            options: [
                {v: "S", t:"Seoul"},
                {v: "J", t:"Jeju"},
                {v: "B", t:"Busan"},
            ],
            // select box의 default 값이 제주로 되어있음
            region: "J",
            // true인 경우에만 table을 보여주고 싶을 떄
            tableShow: false,
        };
    },
    // 만약 input1에 변경이 일어나면, 바로 캐치해서 알 수 있음
    // user에게 action을 받지않고 프로그램 내에서 변경사항이 생길 때, 바로 확인 가능
    //데이터가 변경할 때 마다 console로 찍힘
    // 특정 데이터를 항상 모니터링을 할 때, 자주 사용
    watch: {
        input1(){
            console.log(this.input1);
        }
    },
    // vue는 모든 method를 이렇게 정의
    // 데이터의 변수명만 추가하면 안됨. this라는 객체 추가 필요
    // 이렇게 get set으로 데이터 control 하는데 익숙해지면 데이터 control 매우 쉬워짐
    methods: {
        getData() {
            alert(this.input1)
        },
        setData() {
            this.input1 = "12345";
        },
        changeRegion(){
            alert(this.region);
        },
    },
    // life cycle
    // 홈페이지 F12 -> console 창에서 확인
    // data가 바뀌면 beforeUpdate -> updated 실행됨 => 재랜더링 되는 것!
    beforeCreate(){
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate(){
        console.log('beforeUpdate')
    },
    updated(){
        console.log('updated')
    },
    beforeUnmount() {
        console.log('beforeDestroy')
    },
    unmounted() {
        console.log('destroyed')
    }
    // beforeDestroy -> beforeUnmount
};
</script>