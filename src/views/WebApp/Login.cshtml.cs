using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using GraduateStudyWebApp.FunClass;

namespace TaskManageCore.Pages.WebApp
{
    public class LoginModel : PageModel
    {
        public void OnGet()
        {

        }
        public string Url_Session_SetString
        {
            get
            {
                //��ȡ����������WebRoot
                return clsPubVar.Url_Session_SetString;
            }
        }
        public string Url_Session_GetString
        {
            get
            {
                //��ȡ����������WebRoot
                return clsPubVar.Url_Session_GetString;
            }
        }
        /// <summary>
        /// ��ǰ�������Ŀ¼����appsettings.json���ã�environmentVariables:ASPNETCORE_PATHBASE
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_WebRoot)
        /// </summary>
        public string WebRoot
        {
            get
            {
                //����·��
                string strPhysicalRoot = AppContext.BaseDirectory;
                //��ȡ���ã������Ŀ¼
                var pathBase = Environment.GetEnvironmentVariable("ASPNETCORE_PATHBASE");
                //��ȡ����������WebRoot
                return clsPubVar.WebRoot;
            }
        }
        //public void SetSession4(string strKey, string strValue)
        //{
        //    ViewBag.strKey = strValue;
        //}
        public void SetSession3(string strKey, string strValue)
        {
            ViewData.Add(strKey, strValue);
        }
        public void SetSession2(string strKey, string strValue)
        {
            HttpContext.Session.SetString(strKey, strValue);
        }
        /// <summary>
        /// Session����-�û�Id
        /// </summary>
        public string seUserId
        {
            get
            {
                var strValue = HttpContext.Session.GetString("UserId");
                return strValue;
            }
            set
            {
                HttpContext.Session.SetString("UserId", value);
            }
        }
        /// <summary>
        /// ��ȡSession����
        /// (AutoGCLib.WA_ViewScriptCSModel_TS4CSharp:Gen_WApi_Model_GetSession)
        /// </summary>
        /// <param name="strKey">�ؼ���-Session������</param>
        /// <returns>���ص�ǰ�ؼ��ֵ�ֵ</returns>
        public string GetSession(string strKey)
        {
            var strValue = HttpContext.Session.GetString(strKey);
            return strValue;
        }
        public string GetSession2(string strKey)
        {
            var strValue = HttpContext.Session.GetString(strKey);
            return strValue;
        }
        public void SetSession(string strKey, string strValue)
        {

            byte[] byteArray = System.Text.Encoding.Default.GetBytes(strValue);
            Request.HttpContext.Session.Set(strKey, byteArray);


            //            byte[] byteArray = ͨ��ĳ�ַ�ʽ��ȡ�����ֽ�����
            //string str = System.Text.Encoding.Default.GetString(byteArray);
            //var value = HttpContext.Session.GetString(Key);

            //var data = new
            //{
            //    Key,
            //    value
            //};
            //return Json(data);
        }
    }
}