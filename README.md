# CS's private repository

# 关于自用的分流规则
**surge与qx对于远程引用规则的不同：**
**surge**
- 规则文件内**无具体策略组**，但可以忽略掉规则内的策略组，如proxy/direct/reject等，**必须**要在**RULE-SET后自行添加**
- 关键词是DOMAIN/DOMAIN-KEYWORD/DOMAIN-SUFFIX，**不能兼容host类关键词**
**quantumultX**
- 规则文件内**必须**要有**具体策略组**，但是可是通过force-policy参数来强制要求走规则策略组
- 关键词是host/host-keyword/host-suffix，**可以兼容DOMAIN类关键词**

对于兼容surge与quantumultX的规则**结论**
- surge必须要指定策略组->自用的规则必须按照proxy,direct,reject分开来写
- qx可以兼容关键词->选用DOMAIN作为规则的关键词
- qx必须要在规则内指定策略组，但是surge可以忽略掉规则内的策略组->规则要写策略组

即形式是：
        **DOMAIN关键词, url, proxy/direct/reject**
