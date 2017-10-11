<template>
	<div>
		<table>
			<thead>
		        <tr>
		            <th>标题</th>
		            <th>标签</th>
		            <th>日期</th>
		            <th>操作</th>
		        </tr>
		    </thead>
		    <tbody>
		        	<tr v-for="article in articles">
		        		<td>{{article.title }}</td>
		        		<td>{{article.tags }}</td>
            			<td>{{article.date }}</td>
            			<td>delete</td>
		        	</tr>
		    </tbody>
		</table>
	</div>
</template>
<script>
import {mapState, mapActions, mapMutations} from 'vuex'
export default{
	data(){
		return {
			page:1
		}
	},
	computed: {
		...mapState({
            articles: state => [{
				title:"112",
				tags:"test",
				date:"2017/10/11"
			}]
        }),
	},
	methods: {
	}
}
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
table {
    border-left: 0.1875rem solid rgb(129, 216, 208);
    border-right: 0.1875rem solid rgb(129, 216, 208);
    margin: 0 auto;
    text-align: center;
    max-height: 25rem;
    min-width: 70%;
    th, td {
        width: 25%;
    }
    thead, tfoot {
        color: darkturquoise;
    }
    tbody {
        color: #ffffff;
    }
    tr {
        height: 2.5rem;
        line-height: 1.875rem;
        color:#999
    }
    i {
        font-size: 1.25rem;
        margin-right: 0.625rem;
        color: rgb(129, 216, 208);
        cursor: pointer;
        &:hover {
            color: #ffc520;
        }
    }
    tfoot tr td:nth-child(1), tfoot tr td:nth-child(3) {
        cursor: pointer;
        &:hover {
            color: #ffc520;
        }
    }
}
.title {
    cursor: pointer;
    &:hover {
         color: #ffc520;
     }
}
</style>
