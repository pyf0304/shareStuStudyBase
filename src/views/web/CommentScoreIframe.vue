﻿@page
@{
    Layout = "~/Pages/Shared/_Layout_PC.cshtml";
    ViewData["Title"] = "主题研究";
}


@section Styles{

    <link rel="stylesheet" href="~/lib/Xadmin/css/font.css">
    <link rel="stylesheet" href="~/lib/Xadmin/css/xadmin.css">
    <!-- <link rel="stylesheet" href="./css/theme5.css"> -->
    <style>
        .page-content {
            position: absolute;
            top: 45px;
            right: 0;
            /*bottom: 42px;*/
            bottom: 0px;
            left: 0px;
            overflow: hidden;
            z-index: 1;
        }

        #TopicName {
            font-size: 16px;
            font-style: italic;
            /*font-weight: bold;*/
        }

        .container .logo a {
            float: left;
            font-size: 18px;
            padding-left: 20px;
            line-height: 45px;
            /* width: 200px; */
        }
    </style>
}
@section Scripts{


    <script src="../lib/jquery/dist/jquery.js"></script>
    @*<script src="../lib/bootstrap/dist/js/bootstrap.js"></script>*@
    @*<script src="../js/site.js" asp-append-version="true"></script>*@
    @*<script src="../lib/bootstrap/dist/js/popper.js"></script>*@

    <script src="~/lib/Xadmin/lib/layui/layui.js" charset="utf-8"></script>
    <script src="~/lib/Xadmin/js/xadmin.js" type="text/javascript"></script>
    <script src="../lib/require/require.js" data-main="../js/src/config"></script>
}

<script>

    //清空框架页
    function RemoveIfame_Click() {
        localStorage.removeItem('hid')
        $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
    }
    //window.onload = function () {
    //    //加载页面的时候关闭控制框架的所有缓存页面
    //    localStorage.removeItem('hid')
    //    $('.layui-tab-title li[lay-id]').find('.layui-tab-close').click();
    //}

    function GetRequest() {
        const url = location.search; //获取url中"?"符后的字串
        const theRequest = new Object();
        if (url.indexOf("?") != -1) {
            const str = url.substr(1);
            strs = str.split("&");
            for (let i = 0; i < strs.length; i++) {
                theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }

    function GetCurrEduclsID() {
        const Request = new Object();
        Request = GetRequest();
        const str1;
        str1 = Request['Id_CurrEduCls'];
        str2 = Request['UserId'];

        if (str1 != null) {
            $('#hidId_CurrEduClspara').val(str1);
            $('#hidUserId').val(str2);


            require(["../js/Web/CommentScoreIframe.js"], function (index) {
                const objPage = new index.CommentScoreIframe();
                objPage.PageLoad();
            });

        }
        else {
            require(["../js/Web/CommentScoreIframe.js"], function (index) {
                const objPage = new index.CommentScoreIframe();
                objPage.PageLoad();
            });
        }
    }


    window.onload = function () {

        //加载页面的时候关闭控制框架的所有缓存页面
        RemoveIfame_Click();
        this.GetCurrEduclsID();

    }

    //setInterval('Bind_QuestionsCount()', 30000);  //指定30s刷新一次
    //function Bind_QuestionsCount() {
    //    require(["../js/Web/CommentScoreIframe.js"], function (index) {
    //        const objPage = new index.CommentScoreIframe();
    //        objPage.Bind_QuestionsCount();
    //    });
    //}

    //function EduCls_Click(strkey, strName, strTypeID) {
    //    require(["../js/Web/CommentScoreIframe.js"], function (index) {
    //        const objPage = new index.CommentScoreIframe();
    //        objPage.EduCls_Click(strkey, strName, strTypeID);
    //    });

    //    //RemoveIfame_Click();
    //}

    //信息提示
    function layui_Alert(iconKey, strMsg) {

        layer.msg(strMsg, {
            icon: iconKey,
            time: 2000
        });
    }



</script>

@*<div id="divLoading" class="loading">
        <img src="~/images/CirclePoint.gif" />
    </div>*@
<div class="index">
    <!-- 顶部开始 -->
    <div class="container">
        <div class="logo">
            <a href="index" style="font-size:20px;">评论打分</a>
        </div>

        @*<div class="left_open">
                <a><i title="展开左侧栏" class="iconfont">&#xe699;</i></a>
            </div>*@

        <ul class="layui-nav left fast-add" lay-filter="" id="ulTopicName">
            <li class="layui-nav-item">
                <a href="javascript:;" id="CurrEduName">
                </a>
            </li>
        </ul>

        <ul class="layui-nav left fast-add" lay-filter="" id="EduCls" style="margin-left:60px;">



            @*<li class="layui-nav-item">
                <a href="javascript:;">
                    <span id="eduClsName"></span>
                </a>
                <dl class="layui-nav-child" id="dlEduClsList">
                   

                </dl>
            </li>*@

            @*<li class="layui-nav-item" style="margin-left:60px;">
                    <a onclick="xadmin.add_tab('主题查看','../GraduateEduTopic/ResearchTopicList')"><i class="layui-icon layui-icon-read" style="line-height:30px"></i>主题查看</a>
                </li>*@



        </ul>

        <ul class="layui-nav right" lay-filter="">

            @*<li class="layui-nav-item" style="margin-right:50px;">
                    <a onclick="xadmin.add_tab('学生得分详情','../GradEduTools/SysScoreSummaryNewTotal')"><i class="layui-icon layui-icon-chart" style="line-height:30px" title="学生得分详情"></i>学生得分详情</a>
                </li>*@

            <li class="layui-nav-item">
                <a href="javascript:;" id="userName"></a>
                <dl class="layui-nav-child">
                    <!-- 二级菜单 -->
                    <dd>
                        <a onclick="xadmin.open('个人信息','../Web/UserInfo',1000,800)">个人信息</a>
                    </dd>
                    @*<dd>
                            <a onclick="xadmin.open('切换角色','../Web/UserInfo')">切换角色</a>
                        </dd>*@
                    @*<dd>
                            <a target="_top" href="../Web/Index">返回首页</a>
                        </dd>*@
                </dl>
            </li>
            <li class="layui-nav-item to-index">
                <apan id="spanMajorName"></apan>
            </li>
            @*<li class="layui-nav-item">
                    <a onclick="xadmin.add_tab('邀请回答问题','../InteractManage/qa_PaperCRUD?typeid=2&IsReceive=1')">答疑被邀请<span class="layui-badge" id="QuestionsCount">0</span></a>
                </li>*@
            <li class="layui-nav-item to-index">
                <a target="_top" href="../Web/Index">前台首页</a>
            </li>
        </ul>
    </div>
    <!-- 顶部结束 -->
    <!-- 中部开始 -->
    <!-- 左侧菜单开始 -->
    <!-- <div class="x-slide_left"></div> -->
    <!-- 左侧菜单结束 -->
    <!-- 右侧主体开始 -->
    <div class="page-content">
        <div class="layui-tab tab" lay-filter="xbs_tab" lay-allowclose="false">
            <ul class="layui-tab-title">
                <li class="home">
                    <i class="layui-icon">&#xe68e;</i>评论打分
                </li>
            </ul>
            <div class="layui-unselect layui-form-select layui-form-selected" id="tab_right">
                <dl>
                    <dd data-type="this">关闭当前</dd>
                    <dd data-type="other">关闭其它</dd>
                    <dd data-type="all">关闭全部</dd>
                </dl>
            </div>
            <div class="layui-tab-content">
                <div class="layui-tab-item layui-show">
                    <iframe id="Topic_iframe" src='../GradEduTools/CommentScore' frameborder="0" scrolling="yes" class="x-iframe"></iframe>
                </div>
            </div>
            <div id="tab_show"></div>
        </div>
    </div>
    <div class="page-content-bg"></div>
</div>

<style id="theme_style"></style>
<!-- 右侧主体结束 -->
<!-- 中部结束 -->
@*<input id="hidUserInfo" type="hidden" value="@Model.GetSession("objvUserRoleRelation")" />
    <input id="hidUserId" type="hidden" />*@

<input id="hidid_CurrEduCls" type="hidden" />

@* 教学班Id传递参数 *@
<input id="hidId_CurrEduClspara" type="hidden" />

