/**
 * API module
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
// const wechat = require('./utils/wechat')
// const Promise = require('./utils/bluebird')
/*eslint-disable*/
const useUrl = require('./utils/service')
App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: 'WeApp Boilerplate',
    version: '0.1.0',
    userInfo: null,
    ageArr: ['请选择Ta的年龄区间', '15岁以下', '16-18岁', '19-21岁', '22-24岁', '25-27岁', '28-31岁', '32-34岁', '35-37岁', '38-40岁', '41-43岁', '44-46岁', '47-49岁', '50岁以上'],
    industryOne: ['请选择Ta所在的行业', '不限', '销售', '客户服务', '计算机/互联网', '通信/电子', '生产/执照', '物流/仓储', '商贸/采购', '人事/行政', '高级管理', '广告/市场', '传媒/艺术', '生物/制药', '医疗/护理', '金融/银行/保险', '建筑/房地产', '咨询/顾问', '法律', '财会/审计', '教育/科研', '服务业', '交通运输', '政府机构', '军人/警察', '农林牧渔', '自由职业', '在校学生', '待业', '其他行业'],
    industryTwo: [
      ['请选择Ta所在的行业'],
      ['不限'],
      ['销售总监', '销售经理', '销售主管', '销售专员', '渠道/分销管理', '渠道/分销专员', '经销商', '客户经理', '客户代表', '其他'],
      ['客服经理', '客服主管', '客服专员', '客服协调', '客服技术支持', '其他'],
      ['IT技术总监', 'IT技术经理', 'IT工程师', '系统管理员', '测试专员', '运营管理', '网页设计', '网站编辑', '网站产品经理', '其他'],
      ['通信技术', '电子技术', '其他'],
      ['工厂经理', '工程师', '项目主管', '营运经理', '营运主管', '车间主任', '物料管理', '生产领班', '操作工人', '安全管理', '其他'],
      ['物流经理', '物流主管', '物流专员', '仓库经理', '仓库管理员', '货运代理', '集装箱业务', '海关事物管理', '报单员', '快递员', '其他'],
      ['商务经理', '商务专员', '采购经理', '采购专员', '外贸经理', '外贸专员', '业务跟单', '报关员', '其他'],
      ['人事总监', '人事经理', '人事主管', '人事专员', '招聘经理', '招聘专员', '培训经理', '培训专员', '秘书', '文员', '后勤', '其他'],
      ['总经理', '副总经理', '合伙人', '总监', '经理', '总裁助理', '其他'],
      ['广告客户经理', '广告客户专员', '广告设计经理', '广告设计专员', '广告策划', '市场营销经理', '市场营销专员', '市场策划', '市场调研与分析', '市场拓展', '公关经理', '公关专员', '媒介经理', '媒介专员', '品牌经理', '品牌专员', '其他'],
      ['主编', '编辑', '作家', '撰稿人', '文案策划', '出版发行', '导演', '记者', '主持人', '演员', '模特', '经纪人', '摄影师', '影视后期制作', '设计师', '画家', '音乐家', '舞蹈', '其他'],
      ['生物工程', '药品生产', '临床研究', '医疗器械', '医药代表', '化工工程师', '其他'],
      ['医疗管理', '医生', '心理医生', '药剂师', '护士', '兽医', '其他'],
      ['投资', '保险', '金融', '银行', '证券', '其他'],
      ['建筑师', '工程师', '规划师', '景观设计', '房地产策划', '房地产交易', '物业管理', '其他'],
      ['专业顾问', '咨询经理', '咨询师', '培训师', '其他'],
      ['律师', '律师助理', '法务经理', '法务专员', '知识产权专员', '其他'],
      ['财务总监', '财务经理', '财务主管', '会计', '注册会计师', '审计师', '税务经理', '税务专员', '成本经理', '其他'],
      ['教授', '讲师/助教', '中学教师', '小学教师', '幼师', '教务管理人员', '职业技术教师', '培训师', '科研管理人员', '科研人员', '其他'],
      ['餐饮管理', '厨师', '餐厅服务员', '酒店管理', '大堂经理', '酒店服务员', '导游', '美容师', '健身教练', '商场经理', '零售店店长', '店员', '保安经理', '保安人员', '家政服务', '其他'],
      ['飞行员', '空乘人员', '地勤人员', '列车司机', '乘务员', '船长', '船员', '司机', '其他'],
      ['公务员', '其他'],
      ['军人/警察'],
      ['农林牧渔'],
      ['自由职业'],
      ['在校学生'],
      ['待业'],
      ['其他行业']
    ],
    /*eslint-disable*/
    // 国假调休日期表
    festivalObj: {
      "20130101":"1","20130102":"1","20130103":"1","20130105":"2","20130106":"2","20130209":"1","20130210":"1","20130211":"1","20130212":"1","20130213":"1","20130214":"1","20130215":"1","20130216":"2","20130217":"2","20130404":"1","20130405":"1","20130406":"1","20130407":"2","20130427":"2","20130428":"2","20130429":"1","20130430":"1","20130501":"1","20130608":"2","20130609":"2","20130610":"1","20130611":"1","20130612":"1","20130919":"1","20130920":"1","20130921":"1","20130922":"2","20130928":"1","20130929":"2","20130930":"2","20131001":"1","20131002":"1","20131003":"1","20131004":"1","20131005":"1","20131006":"1","20131007":"1","20131012":"2","20140101":"1","20140126":"2","20140131":"1","20140201":"1","20140202":"1","20140203":"1","20140204":"1","20140205":"1","20140206":"1","20140208":"2","20140405":"1","20140406":"1","20140407":"1","20140501":"1","20140502":"1","20140503":"1","20140504":"2","20140531":"1","20140601":"1","20140602":"1","20140906":"1","20140907":"1","20140908":"1","20140928":"2","20141001":"1","20141002":"1","20141003":"1","20141004":"1","20141005":"1","20141006":"1","20141007":"1","20141011":"2","20150101":"1","20150102":"1","20150103":"1","20150104":"2","20150215":"2","20150216":"2","20150217":"2","20150218":"1","20150219":"1","20150220":"1","20150221":"1","20150222":"1","20150223":"1","20150224":"1","20150225":"2","20150226":"2","20150227":"2","20150228":"2","20150404":"1","20150405":"1","20150406":"1","20150501":"1","20150502":"1","20150503":"1","20150620":"1","20150621":"1","20150622":"1","20150903":"1","20150904":"1","20150905":"1","20150906":"2","20150926":"1","20150927":"1","20150928":"2","20150929":"2","20150930":"2","20151001":"1","20151002":"1","20151003":"1","20151004":"1","20151005":"1","20151006":"1","20151007":"1","20151008":"2","20151009":"2","20151010":"2","20160101":"1","20160102":"1","20160103":"1","20160206":"2","20160207":"1","20160208":"1","20160209":"1","20160210":"1","20160211":"1","20160212":"1","20160213":"1","20160214":"2","20160402":"1","20160403":"1","20160404":"1","20160430":"1","20160501":"1","20160502":"1","20160609":"1","20160610":"1","20160611":"1","20160612":"2","20160915":"1","20160916":"1","20160917":"1","20160918":"2","20161001":"1","20161002":"1","20161003":"1","20161004":"1","20161005":"1","20161006":"1","20161007":"1","20161008":"2","20161009":"2","20161231":"1","20170101":"1","20170102":"1","20170122":"2","20170127":"1","20170128":"1","20170129":"1","20170130":"1","20170131":"1","20170201":"1","20170202":"1","20170203":"2","20170204":"2","20170401":"2","20170402":"1","20170403":"1","20170404":"1","20170429":"1","20170430":"1","20170501":"1","20170527":"2","20170528":"1","20170529":"1","20170530":"1","20170930":"2","20171001":"1","20171002":"1","20171003":"1","20171004":"1","20171005":"1","20171006":"1","20171007":"1","20171008":"1"
    },
    // 所有固定节日日期列表
    festivalObj2: {
      // 固定的公历节日
      "S": {
        "1001": [
          {
            "V": "国庆节",
            "P": "10",
            "Y": "1949"
          },
          {
            "V": "世界音乐日",
            "P": "2",
            "Y": "1980"
          },
          {
            "V": "国际老人节",
            "P": "2",
            "Y": "1992"
          }
        ],
        "1002": [
          {
            "V": "国际和平与民主自由斗争日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1004": [
          {
            "V": "世界动物日",
            "P": "2",
            "Y": "1931"
          }
        ],
        "1005": [
          {
            "V": "国际教师节",
            "P": "2",
            "Y": "1994"
          }
        ],
        "1008": [
          {
            "V": "全国高血压日",
            "P": "2",
            "Y": "1998"
          }
        ],
        "1009": [
          {
            "V": "世界邮政日",
            "P": "2",
            "Y": "1969"
          }
        ],
        "1010": [
          {
            "V": "辛亥革命",
            "P": "6",
            "Y": "1911"
          },
          {
            "V": "世界精神卫生日",
            "P": "2",
            "Y": "1992"
          }
        ],
        "1011": [
          {
            "V": "世界镇痛日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1013": [
          {
            "V": "世界保健日",
            "P": "2",
            "Y": "1950"
          }
        ],
        "1014": [
          {
            "V": "世界标准日",
            "P": "2",
            "Y": "1946"
          }
        ],
        "1015": [
          {
            "V": "国际盲人节(白手杖节)",
            "P": "2",
            "Y": "1984",
            "K": "国际盲人节"
          }
        ],
        "1016": [
          {
            "V": "世界粮食日",
            "P": "2",
            "Y": "1981"
          }
        ],
        "1017": [
          {
            "V": "世界消除贫困日",
            "P": "2",
            "Y": "1992"
          }
        ],
        "1022": [
          {
            "V": "世界传统医药日",
            "P": "2",
            "Y": "1991"
          }
        ],
        "1024": [
          {
            "V": "联合国日",
            "P": "2",
            "Y": "1942"
          },
          {
            "V": "世界发展宣传日",
            "P": "2",
            "Y": "1942"
          }
        ],
        "1028": [
          {
            "V": "世界男性健康日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1031": [
          {
            "V": "万圣夜",
            "P": "9",
            "Y": "1900"
          },
          {
            "V": "世界勤俭日",
            "P": "2",
            "Y": "1924"
          }
        ],
        "1107": [
          {
            "V": "十月社会主义革命纪念日",
            "P": "2",
            "Y": "1917"
          }
        ],
        "1108": [
          {
            "V": "中国记者日",
            "P": "2",
            "Y": "2000"
          }
        ],
        "1109": [
          {
            "V": "全国消防安全宣传教育日",
            "P": "2",
            "Y": "1992"
          }
        ],
        "1110": [
          {
            "V": "世界青年节",
            "P": "2",
            "Y": "1984"
          }
        ],
        "1111": [
          {
            "V": "国际科学与和平周",
            "P": "2",
            "Y": "1988"
          },
          {
            "V": "光棍节",
            "P": "6",
            "Y": "2015"
          }
        ],
        "1112": [
          {
            "V": "孙中山诞辰纪念日",
            "P": "2",
            "Y": "1866"
          }
        ],
        "1114": [
          {
            "V": "世界糖尿病日",
            "P": "2",
            "Y": "1991"
          }
        ],
        "1116": [
          {
            "V": "国际宽容日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1117": [
          {
            "V": "国际大学生节",
            "P": "2",
            "Y": "1946"
          }
        ],
        "1121": [
          {
            "V": "世界问候日",
            "P": "2",
            "Y": "1973"
          },
          {
            "V": "世界电视日",
            "P": "2",
            "Y": "1996"
          }
        ],
        "1125": [
          {
            "V": "消除对妇女的暴力日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1129": [
          {
            "V": "国际声援巴勒斯坦人民国际日",
            "P": "2",
            "Y": "1977"
          }
        ],
        "1201": [
          {
            "V": "艾滋病日",
            "P": "6",
            "Y": "1988"
          }
        ],
        "1203": [
          {
            "V": "世界残疾人日",
            "P": "2",
            "Y": "1992"
          }
        ],
        "1205": [
          {
            "V": "世界弱能人士日",
            "P": "2",
            "Y": "1949"
          },
          {
            "V": "国际经济和社会发展志愿人员日",
            "P": "2",
            "Y": "1985"
          }
        ],
        "1207": [
          {
            "V": "国际民航日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1209": [
          {
            "V": "国际反腐败日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1210": [
          {
            "V": "世界人权日",
            "P": "2",
            "Y": "1948"
          }
        ],
        "1211": [
          {
            "V": "世界防治哮喘日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1212": [
          {
            "V": "西安事变纪念日",
            "P": "2",
            "Y": "1936"
          }
        ],
        "1213": [
          {
            "V": "南京大屠杀死难者国家公祭日",
            "P": "9",
            "Y": "1937",
            "L": "公祭日"
          }
        ],
        "1215": [
          {
            "V": "世界强化免疫日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "1220": [
          {
            "V": "澳门回归",
            "P": "6",
            "Y": "1999"
          }
        ],
        "1221": [
          {
            "V": "国际篮球日",
            "P": "2",
            "Y": "1891"
          }
        ],
        "1224": [
          {
            "V": "平安夜",
            "P": "9",
            "Y": "1818"
          }
        ],
        "1225": [
          {
            "V": "圣诞节",
            "P": "9",
            "Y": "1607"
          }
        ],
        "1226": [
          {
            "V": "世界足球日",
            "P": "2",
            "Y": "1863"
          }
        ],
        "0901": [
          {
            "V": "全国中小学开学日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0622": [
          {
            "V": "中国儿童慈善活动日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0503": [
          {
            "V": "世界新闻自由日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0426": [
          {
            "V": "世界知识产权日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0402": [
          {
            "V": "国际儿童图书日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0224": [
          {
            "V": "第三世界青年日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0930": [
          {
            "V": "烈士纪念日",
            "P": "2",
            "Y": "2014"
          }
        ],
        "0921": [
          {
            "V": "国际和平日",
            "P": "2",
            "Y": "2002"
          },
          {
            "V": "世界老年性痴呆宣传日",
            "P": "2",
            "Y": "2002"
          }
        ],
        "0815": [
          {
            "V": "日本无条件投降日",
            "P": "6",
            "Y": "1945",
            "L": "日本投降"
          }
        ],
        "0519": [
          {
            "V": "中国旅游日",
            "P": "2",
            "Y": "2011"
          }
        ],
        "0927": [
          {
            "V": "世界旅游日",
            "P": "2",
            "Y": "1979"
          }
        ],
        "0801": [
          {
            "V": "建军节",
            "P": "6",
            "Y": "1949"
          }
        ],
        "0330": [
          {
            "V": "巴勒斯坦国土日",
            "P": "2",
            "Y": "1976"
          }
        ],
        "0422": [
          {
            "V": "世界地球日",
            "P": "6",
            "Y": "1970",
            "L": "地球日"
          },
          {
            "V": "世界法律日",
            "P": "2",
            "Y": "1970"
          }
        ],
        "0617": [
          {
            "V": "防治荒漠化和干旱日",
            "P": "2",
            "Y": "1995"
          }
        ],
        "0916": [
          {
            "V": "国际臭氧层保护日",
            "P": "2",
            "Y": "1995"
          }
        ],
        "0606": [
          {
            "V": "全国爱眼日",
            "P": "2",
            "Y": "1996"
          }
        ],
        "0101": [
          {
            "V": "元旦节",
            "P": "10",
            "Y": "1949"
          }
        ],
        "0928": [
          {
            "V": "孔子诞辰",
            "P": "6",
            "Y": "1899"
          }
        ],
        "0308": [
          {
            "V": "妇女节",
            "P": "9",
            "Y": "1909"
          }
        ],
        "0423": [
          {
            "V": "世界图书和版权日",
            "P": "2",
            "Y": "1995"
          }
        ],
        "0515": [
          {
            "V": "碘缺乏病防治日",
            "P": "2",
            "Y": "1993"
          }
        ],
        "0504": [
          {
            "V": "青年节",
            "P": "9",
            "Y": "1919"
          }
        ],
        "0711": [
          {
            "V": "航海日",
            "P": "2",
            "Y": "2005"
          },
          {
            "V": "世界人口日",
            "P": "2",
            "Y": "1987"
          }
        ],
        "0401": [
          {
            "V": "愚人节",
            "P": "9",
            "Y": "1983"
          },
          {
            "V": "全国爱国卫生运动月(四月)",
            "P": "2",
            "Y": "1958",
            "K": "全国爱国卫生运动月"
          },
          {
            "V": "税收宣传月(四月)",
            "P": "2",
            "Y": "1992",
            "K": "税收宣传月"
          }
        ],
        "0424": [
          {
            "V": "亚非新闻工作者日",
            "P": "2",
            "Y": "1963"
          }
        ],
        "0918": [
          {
            "V": "九一八事变纪念日",
            "P": "6",
            "Y": "1931",
            "K": "九一八事变",
            "L": "九一八"
          }
        ],
        "0321": [
          {
            "V": "世界森林日",
            "P": "2",
            "Y": "1971"
          },
          {
            "V": "消除种族歧视国际日",
            "P": "2",
            "Y": "1966"
          },
          {
            "V": "世界儿歌日",
            "P": "2",
            "Y": "1976"
          }
        ],
        "0903": [
          {
            "V": "抗日战争胜利纪念日",
            "P": "6",
            "Y": "1945",
            "L": "抗战胜利"
          }
        ],
        "0517": [
          {
            "V": "国际电信日",
            "P": "2",
            "Y": "1969"
          }
        ],
        "0701": [
          {
            "V": "香港回归",
            "P": "6",
            "Y": "1997"
          },
          {
            "V": "建党日",
            "P": "9",
            "Y": "1921",
            "L": "建党日"
          }
        ],
        "0322": [
          {
            "V": "世界水日",
            "P": "2",
            "Y": "1993"
          }
        ],
        "0908": [
          {
            "V": "国际扫盲日",
            "P": "2",
            "Y": "1965"
          },
          {
            "V": "国际新闻工作者日",
            "P": "2",
            "Y": "1958"
          }
        ],
        "0920": [
          {
            "V": "国际爱牙日",
            "P": "2",
            "Y": "1989"
          }
        ],
        "0518": [
          {
            "V": "博物馆日",
            "P": "6",
            "Y": "1977"
          }
        ],
        "0702": [
          {
            "V": "国际体育记者日",
            "P": "2",
            "Y": "1995"
          }
        ],
        "0323": [
          {
            "V": "世界气象日",
            "P": "2",
            "Y": "1950"
          }
        ],
        "0312": [
          {
            "V": "植树节",
            "P": "9",
            "Y": "1979"
          },
          {
            "V": "孙中山逝世纪念日",
            "P": "2",
            "Y": "1925"
          }
        ],
        "0301": [
          {
            "V": "国际海豹日",
            "P": "2",
            "Y": "1983"
          }
        ],
        "0324": [
          {
            "V": "世界防治结核病日",
            "P": "2",
            "Y": "1995"
          }
        ],
        "0910": [
          {
            "V": "教师节",
            "P": "9",
            "Y": "1985"
          }
        ],
        "0508": [
          {
            "V": "世界红十字日",
            "P": "2",
            "Y": "1948"
          },
          {
            "V": "微笑日",
            "P": "6",
            "Y": "1948"
          }
        ],
        "0531": [
          {
            "V": "世界无烟日",
            "P": "6",
            "Y": "1989",
            "L": "无烟日"
          }
        ],
        "0623": [
          {
            "V": "奥林匹克",
            "P": "6",
            "Y": "1948"
          }
        ],
        "0520": [
          {
            "V": "全国学生营养日",
            "P": "2",
            "Y": "1989"
          },
          {
            "V": "全国母乳喂养宣传日",
            "P": "2",
            "Y": "1989"
          }
        ],
        "0210": [
          {
            "V": "国际气象节",
            "P": "2",
            "Y": "1991"
          }
        ],
        "0601": [
          {
            "V": "儿童节",
            "P": "9",
            "Y": "1949"
          },
          {
            "V": "国际牛奶日",
            "P": "2",
            "Y": "2000"
          }
        ],
        "0808": [
          {
            "V": "中国男子节(爸爸节)",
            "P": "2",
            "Y": "1945",
            "K": "中国男子节"
          }
        ],
        "0303": [
          {
            "V": "全国爱耳日",
            "P": "2",
            "Y": "1999"
          }
        ],
        "0625": [
          {
            "V": "全国土地日",
            "P": "2",
            "Y": "1986"
          }
        ],
        "0315": [
          {
            "V": "消费者权益日",
            "P": "9",
            "Y": "1983",
            "L": "消费者日"
          }
        ],
        "0407": [
          {
            "V": "世界卫生日",
            "P": "2",
            "Y": "1948"
          }
        ],
        "0626": [
          {
            "V": "国际禁毒日",
            "P": "2",
            "Y": "1987"
          },
          {
            "V": "国际宪章日",
            "P": "2",
            "Y": "1987"
          }
        ],
        "0305": [
          {
            "V": "学雷锋纪念日",
            "P": "2",
            "Y": "1963"
          },
          {
            "V": "中国青年志愿者服务日",
            "P": "2",
            "Y": "1949"
          }
        ],
        "0707": [
          {
            "V": "七七事变纪念日",
            "P": "6",
            "Y": "1945",
            "K": "七七事变",
            "L": "七七事变"
          }
        ],
        "0730": [
          {
            "V": "非洲妇女日",
            "P": "2",
            "Y": "1997"
          }
        ],
        "0512": [
          {
            "V": "国际护士节",
            "P": "6",
            "Y": "1912",
            "L": "护士节"
          }
        ],
        "0202": [
          {
            "V": "世界湿地日",
            "P": "6",
            "Y": "1997",
            "L": "湿地日"
          }
        ],
        "0317": [
          {
            "V": "中国国医节",
            "P": "2",
            "Y": "1929"
          }
        ],
        "0501": [
          {
            "V": "劳动节",
            "P": "10",
            "Y": "1949"
          }
        ],
        "0214": [
          {
            "V": "情人节",
            "P": "9",
            "Y": "1899"
          }
        ],
        "0605": [
          {
            "V": "世界环境保护日",
            "P": "6",
            "Y": "1972",
            "L": "环保日"
          }
        ]
      },
      // 固定的农历节日
      "L": {
        "1001": [
          {
            "V": "寒衣节",
            "P": "2",
            "Y": "1899"
          }
        ],
        "1208": [
          {
            "V": "腊八节",
            "P": "9",
            "Y": "1899"
          }
        ],
        "1216": [
          {
            "V": "尾牙",
            "P": "6",
            "Y": "1899"
          }
        ],
        "1223": [
          {
            "V": "北方小年",
            "P": "9",
            "Y": "1899",
            "K": "小年"
          }
        ],
        "1224": [
          {
            "V": "南方小年",
            "P": "9",
            "Y": "1899",
            "K": "小年"
          }
        ],
        "1230": [
          {
            "V": "除夕夜",
            "P": "9",
            "Y": "1899"
          }
        ],
        "0202": [
          {
            "V": "龙抬头",
            "P": "9",
            "Y": "1899"
          }
        ],
        "0707": [
          {
            "V": "七夕节",
            "P": "9",
            "Y": "1899"
          }
        ],
        "0505": [
          {
            "V": "端午节",
            "P": "10",
            "Y": "1899"
          }
        ],
        "0815": [
          {
            "V": "中秋节",
            "P": "10",
            "Y": "1899"
          }
        ],
        "0909": [
          {
            "V": "重阳节",
            "P": "9",
            "Y": "1899"
          }
        ],
        "0624": [
          {
            "V": "火把节",
            "P": "2",
            "Y": "1899"
          }
        ],
        "0101": [
          {
            "V": "春节",
            "P": "10",
            "Y": "1899"
          }
        ],
        "0715": [
          {
            "V": "中元节",
            "P": "9",
            "Y": "1899"
          }
        ],
        "0115": [
          {
            "V": "元宵节",
            "P": "9",
            "Y": "1899"
          }
        ]
      },
      // 按照计算得到的节日
      "W": {
        "1011": [
          {
            "V": "国际住房日",
            "P": "2",
            "Y": "1985"
          }
        ],
        "1023": [
          {
            "V": "国际减轻自然灾害日",
            "P": "2",
            "Y": "1987"
          }
        ],
        "1024": [
          {
            "V": "世界视觉日",
            "P": "2",
            "Y": "2000"
          }
        ],
        "1144": [
          {
            "V": "感恩节",
            "P": "9",
            "Y": "1941"
          }
        ],
        "1220": [
          {
            "V": "国际儿童电视广播日",
            "P": "2",
            "Y": "1985"
          }
        ],
        "0440": [
          {
            "V": "世界儿童日",
            "P": "2",
            "Y": "1986"
          }
        ],
        "0936": [
          {
            "V": "世界清洁地球日",
            "P": "2",
            "Y": "2006"
          }
        ],
        "0711": [
          {
            "V": "世界建筑日",
            "P": "2",
            "Y": "1985"
          }
        ],
        "0351": [
          {
            "V": "全国中小学生安全教育日",
            "P": "2",
            "Y": "1996"
          }
        ],
        "0730": [
          {
            "V": "被奴役国家周",
            "P": "2",
            "Y": "1959"
          }
        ],
        "0630": [
          {
            "V": "父亲节",
            "P": "9",
            "Y": "2005"
          }
        ],
        "0520": [
          {
            "V": "母亲节",
            "P": "9",
            "Y": "1876"
          }
        ],
        "0530": [
          {
            "V": "全国助残日",
            "P": "2",
            "Y": "1990"
          }
        ],
        "0150": [
          {
            "V": "国际麻风节",
            "P": "2",
            "Y": "1953"
          }
        ],
        "0940": [
          {
            "V": "国际聋人节",
            "P": "2",
            "Y": "1958"
          }
        ],
        "0950": [
          {
            "V": "世界心脏日",
            "P": "2",
            "Y": "1978"
          }
        ]
      }
    }
    /*eslint-enable*/
  },
  // 输入框内容
  inputValue (e, _that) {
    let that = _that
    let type = e.currentTarget.dataset.type
    let value = e.detail.value
    if (type === 'name') {
      that.setData({
        name: value
      })
    } else if (type === 'height') {
      that.setData({
        userHeight: value
      })
    } else if (type === 'company') {
      that.setData({
        compny: value
      })
    } else if (type === 'sport') {
      that.setData({
        likesSports: value
      })
    } else if (type === 'movie') {
      that.setData({
        likesMovies: value
      })
    } else if (type === 'book') {
      that.setData({
        likesBooks: value
      })
    } else if (type === 'evaluate') {
      that.setData({
        comment: value
      })
    }
  },
  // 发起微信支付
  wxpay (obj) {
    let objs = {
      timeStamp: obj.timeStamp,
      nonceStr: obj.nonceStr,
      package: obj.package,
      signType: obj.signType || 'MD5',
      paySign: obj.paySign,
      success: obj.success || function (res) {
        console.log('未传入success回调函数', res)
      },
      fail: obj.fail || function (err) {
        console.log('未传入fail回调函数,err:', err.errMsg)
      },
      complete: obj.complete || function () {}
    }
    wx.requestPayment(objs)
  },
  // 上传媒体文件
  wxUpload (obj) {
    let s = {
      url: obj.url,
      filePath: obj.filePath,
      name: obj.name || 'file',
      header: {
        'content-type' : 'multipart/form-data'
      },
      formData: obj.formData,
      success: obj.success || function (res) {
        console.log('未传入成功回调函数', res)
      },
      fail: obj.fail || function (res) {
        console.log('为传入失败回调函数', res)
      },
      complete: obj.complete || function () {}
    }
    wx.uploadFile(s)
  },
  // 请求数据
  wxrequest (obj) {
    wx.request({
      url: obj.url || useUrl.serviceUrl.login,
      method: obj.method || 'POST',
      data: obj.data || {},
      header: {
        'content-type': obj.header || 'application/x-www-form-urlencoded'
      },
      success: obj.success || function () {
        console.log('未传入success回调函数')
      },
      fail: obj.fail || function (err) {
        console.log('未传入fail回调函数,err:' + err.errMsg)
      },
      complete: obj.complete || function () {}
    })
  },
  // 用户登陆
  wxlogin (loginSuccess, params) {
    let that = this
    // 无条件获取登陆code
    wx.login({
      success (res) {
        // console.log(res)
        let code = res.code
        // 获取用户信息
        let obj = {
          success (data) {
            wx.setStorageSync('userInfo', data.userInfo)
            let iv = data.iv
            let encryptedData = data.encryptedData
            // 获取session_key
            let objs = {
              url: useUrl.login,
              data: {
                code: code,
                iv: iv,
                encryptedData: encryptedData
              },
              success (session) {
                let session_key = 'akljgaajgoehageajnafe'
                wx.setStorageSync('session_key', session_key)
                // console.log(session)
                if (loginSuccess) {
                  loginSuccess(params)
                }
              }
            }
            that.wxrequest(objs)
          }
        }
        that.getUserInfo(obj)
      },
      fail (err) {
        console.log('loginError' + err)
      }
    })
  },
  // 获取用户信息
  getUserInfo (obj) {
    wx.getUserInfo({
      withCredentials: obj.withCredentials || true,
      success: obj.success || function (res) {
        console.log(res)
      },
      fail: obj.fail || function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch () {
    // console.log(' ========== Application is launched ========== ')
    this.wxlogin()
  },
  /**
   * 生命周期函数--监听小程序显示
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow () {
    // console.log(' ========== Application is showed ========== ')
  },
  /**
   * 生命周期函数--监听小程序隐藏
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide () {
    // console.log(' ========== Application is hid ========== ')
  }
})
