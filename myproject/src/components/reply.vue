<template>
  <div class="handImgParent fontSize14">
    <img src="../assets/img/benner3.png" alt="" style="display: block;width: 100%;">
    <div class="banTitle">
      <div class="containerWidth">
        <div style="font-size: 28px;">
          {{language[$store.state.lang].bg.title}}
        </div>
        <div style="margin-top: 10px;color: #9f8cb4;">
          {{language[$store.state.lang].bg.subTitle}}
        </div>
      </div>
    </div>
    <div style="background: #edf3f8;padding-bottom: 40px;">
      <div class="boxShade"></div>
      <div class="containerWidth clear" style="background: white;padding: 40px 50px 40px;box-sizing: border-box;">
        <ul style="width: 130px;border-right: 1px solid #edf3f8;float: left;" ref="ulLeft">
          <li style="padding-bottom: 30px;color: #223552;font-weight: bold;font-size: 16px;">
            {{language[$store.state.lang].bg.questionType}}
          </li>
          <li v-for="(item,index) in language[$store.state.lang].listType" class="clear" style="padding-bottom: 20px;cursor: pointer;" @click="goToType(index)">
              <div style="position: relative;">
                <span style="display: inline-block;width: 3px;height: 12px;background: #5c58eb;position: absolute;top: 4px;" v-show="typeIndex == index"></span>
                <span style="padding-left: 19px;" :class="{colorSele:typeIndex == index}">{{item}}</span>
              </div>
          </li>
        </ul>
        <ul style="width: calc(100% - 180px);float: right;position: relative;">
          <li v-for="(item,index) in language[$store.state.lang].list1" class="clear" :id="index">
              <div style="border-bottom: 1px solid #edf3f8;font-size: 26px;color: #cddce8;padding-bottom: 15px;">
                {{item.title}}
              </div>
              <div style="padding-top: 30px;">
                <div v-for="item1 in item.content" class="clear" style="margin-bottom: 34px;">
                  <div style="float:left;width: 5px;height: 5px;border-radius: 50%;background: #5c58eb;margin-top: 8px;"></div>
                  <div style="float: right;width: calc(100% - 19px);">
                    <div style="font-size: 16px;color: #223552;margin-bottom: 12px;">
                      {{item1.Q}}
                    </div>
                    <div style="font-size: 14px;color: #7b8fac;line-height: 22px;" v-for="item2 in item1.A">
                      {{item2}}
                    </div>
                  </div>
                </div>
              </div>
          </li>
          <li style="bottom: -40px;right: -120px;" @click="FAQscrollTop" class="arrup"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default{
  props:{
    scroll:{
      default:0
    }
  },
  data(){
    return {
      type:'ch',
      typeIndex:0,
      clientHeightImgHei: 0,
      page:{
        value:5,
        total:0,
        current:1
      },
      bodyCon:'',
      language:{
        en:{
          bg:{
            title:'Frequently Asked Questions',
            subTitle:'Here are some common questions about UNICORN',
            questionType:'Question Type'
          },
          listType:['Unicorn related','UIC correlation','Purchase','After-sales','Mining','Purse','Backup','Browser','Other'],
          list1:[{title:'Unicorn related',content:[{'Q':'what is Unicorn?','A':['Unicorn is A new mobile intelligent terminal operating system based on block chain technology, which helps the application of block chain including smart devices, digital wallets, Dapps to be implemented. Currently Unicorn has launched the block chain browser UICExplorer and launched the world\'s first block chain UIC mobile phone.']},{'Q':'what value does Unicorn have?','A':['in A nutshell, Unicorn is building the future mobile version of the ETH, or the mobile version of the EOS, both of which are doing the basic chain of ecology.','Unicorn itself does not make specific applications, but only does the development of basic underlying public chain technology. The because the unicorn is the underlying block chain operating system, and support all kinds of application development in our chain block chain, the chain of the future there will be a lot of application in our unicorn on construction, such as support for the game, traceability, security, health, payment, financial, and other industry application block chain, we need to do is to a block of ecological chain, not just a specific block chain applications. For example, we are building the infrastructure of hydropower and coal in the block chain, and the infrastructure of the block chain highway at the bottom, so the future value is huge.']}]},
            {title:'UIC coin correlation',content:[{'Q':'what is UIC?','A':['the UIC (currency) optimal g is Unicorn block chain ecological token (card), the application in Unicorn the ecosystem of the economic system, Unicorn is in creating A block chain ecosystem, the future support all kinds of the actual block chain application will be born in Unicorn blocks in the ecological chain, such as anti-counterfeiting, traceability, access card, health, electricity, payment, entertainment, financial, and so on all kinds of block chain applications.']},{'Q':'what is UIC for?','A':['UIC is the universal Token at the bottom of the whole ecology. For example, in the future, the APP will be downloaded and charged in the APP market, and the value-added services in the application will be paid.']},{'Q':'how do I get the amount of UIC?','A':['the total amount of UIC (uber coin) is 1 billion, which is limited and cannot be added or tampered with.','80% (800 million) of these were randomly awarded through POW algorithms by users with Unicorn\'s mobile smart terminals.','The other 20% (200 million) are reserved for the future ecological construction of mobile newcomer network, and for the operation and orderly operation of the ecosystem, including rewarding the development team with forward-looking DApp and making great contributions to the upgrading of the infrastructure of mobile intelligent block chain operating system.']}]},
            {title:'Purchase related',content:[{'Q':'the relationship between UIC smart choice and UIC block chain cell phone and sichuan changhong?','A':['UIC block chain cell phone is the first block chain cell phone with Unicorn developed jointly by Unicorn and changhong group. Unicare is an e-commerce platform focusing on intelligent hardware products and the only officially designated platform for UIC block chain cell phones']},
            {'Q':'what are the purchasing channels of UIC block chain cell phones?','A':['at present, we only support the purchase of WeChat public account "youke smart selection", and the purchase channel of PC will be opened in the future.']},
            {'Q':'where can I view the exclusive U code I got after purchasing the machine?','A':['after entering the homepage of the product, click "my" -- "my U code" in the upper left corner to view it.']},
            {'Q':'are there any restrictions?','A':['you can only order one piece of equipment at A time, and there is no upper limit to purchase.']},
            {'Q':'what\'s the use of the exclusive U code? Are there any rewards for inviting friends to buy the machine?','A':['old users (those who have bought it once) can share your exclusive U code. If your friends buy it successfully through your U code, you will get A cash reward of 100 yuan per set.']}]},
            {title:'After-sales related',content:[{'Q':'what channel will be used for delivery and how long will it take?','A':['to ensure the best purchasing experience for you, we will use sf express to deliver the goods. Delivery time: within 15 working days after your successful order.']},
              {'Q':'what are the after-sales policies?','A':['1. Because of the UIC block chain mobile phones is A special custom block chain, to receive cell phone users that get the UIC account, account inside the ownership of the UIC, have some difference with other changhong mobile phone, so do not support the return, recommend that users carefully to buy;','2. Failure occurs within 15 days from the date of purchase, and free replacement and maintenance are supported;','3. Failure occurs 15 days after the date of purchase and free maintenance service is provided within the valid warranty period;','4. The effective warranty period of mobile phone is 1 year;','5. In addition to article 1 of this regulation, all other after-sales policies are consistent with those of other mobile phones in changhong and enjoy national joint insurance, replacement and maintenance;','6. UIC block chain mobile phone after-sales service branch:','7. Non-person-caused problems can be replaced by contacting customer service staff within the after-sales policy;','8. Replacement address:','Address: 18F, building 7, tianxing international, no. 508, fengtan road, gongshu district, hangzhou city, zhejiang province','To: after-sales department',' Contact number: 400-966-1619']}]},
            {title:'mining related',content:[{'Q':'what is the difference between UIC block chain cell phone and ordinary mobile phone?','A':['the UIC block chain mobile phone is the world\'s first Unicorn public chain block mobile phone chain, with the mining algorithm is similar to the currency, the mobile phone as A compute node to operation, is distributed, decentralized, information will not be tampered with.']},
              {'Q':'how is the UIC block chain cell phone mined?','A':['turn on the Unicorn APP on your phone and click A start button to start digging.']},
              {'Q':'how to set automatic mining?','A':['click the "setting" button in the upper right corner of Unicorn APP homepage to switch between manual mining and automatic mining. It should be noted that if the starting time of automatic mining is set as 10:00, it will stop automatically after 18:00, and all mining time will be cleared at 24:00 every night. To ensure the normal operation of automatic mining, unicorn APP must be opened and displayed on the screen.']},
              {'Q':'can UIC on UIC block chain phone be traded later?','A':['you can transfer money from person to person through the wallet function. But not on the exchange.']},
              {'Q':'how much can I dig every day?','A':['the total number of UIC releases is only 10 billion (800 million UIC can be obtained through mining, and another 200 million for team rewards). Every 15 seconds in the first year, the cell phone that produced the block will receive 15 UIC awards. The number will gradually decrease from the beginning of the second year. The amount of mining is affected by many factors, such as the number of miners and the network.']},
              {'Q':'why is my mobile phone zero for many days?','A':['it has something to do with the number of miners and the Internet. It may also have something to do with the cellphone hardware. You can contact our customer service to help with it. There is a certain element of luck in the amount of mining, so don\'t worry too much.']},
              {'Q':'what kind of complete ecological chain is Unicorn? What\'s the value?','A':['Unicorn is A mobile trusted network ecological system, the core of the surrounding the Unicorn smart devices such as mobile phones and tablets, etc., will launch UIC application market, UIC browser, UIC purse around the various application of UIC ecology. The UIC is a Unicorn ecological digital currency, in the can be used in Unicorn the ecosystem, such as the future to UIC application market APP download fees, pay for value-added services in the application, such as the inside of the game pay, buy cloud storage and merchants to advertise in UIC application market, these are accomplished by paying UIC.']},
              {'Q':'does the registration process of UIC wallet require a real name?','A':['no real name is required for the registration of UIC wallet. The UIC in the wallet can be transferred in and out of personal wallet through individuals, similar to alipay.']},
              {'Q':'if the phone breaks down, will the UIC be lost?','A':['Unicorn is A secure and distributed blockchain system. Like bitcoin and Ethernet, the data is permanent and cannot be tampered with. Therefore, as long as you keep your wallet mnemonic, the original wallet backup file and wallet password of the old user, do not forget or lose, the UIC you get will be saved forever. (see the beginner\'s guide for more on wallet backup)']},
              {'Q':'do you need to register?','A':['you only need to set your wallet password for the first time to create your wallet. There is no need to register.']},
              {'Q':'what if you can\'t dig the mine?','A':['it may be that there are too many mining machines in your area or too many mining equipment at the same time. You can choose to dig in another area or at another time to try it.']},
              {'Q':' where can I check the dug U currency?','A':['it is normal to hear the "ding dang" prompt, but the number of screen UIC rewards has not changed. The accumulated value is not updated in real time. The UIC in the upper left corner is the real-time data.']},
              {'Q':'what does block synchronization time mean? And block generation time difference','A':['Unicorn app will synchronize the blocks generated during this period after A long time without Internet connection. The synchronization time is directly related to the network and the number of blocks generated. The recent use of a large number of new devices will also have some impact on the block synchronization time. The block takes a fixed 15-second time.']}]},
            {title:'Purse related',content:[{'Q':'new wallet','A':[' the bottom "wallet" -- "account" -- the top right "add" -- "new account", backup the data according to the mnemonic. New account can be customized account name, currently new account cannot be deleted.']},
              {'Q':'how do I change the account that receives mining rewards?','A':['how to create multiple accounts to switch: click "Settings" in the upper right corner of the APP homepage, select the address to receive mining rewards, and then the account to receive UIC can be switched.']},
              {'Q':'can the UIC between wallets rotate with each other?','A':['you can transfer UIC between personal and personal wallet. Fixed fee 0.00042UIC per transfer. Refer to the beginner\'s tutorial for detailed operation procedures.']},
              {'Q':'is the UIC deal effective immediately?','A':['the transaction needs to be packaged into blocks before it can take effect. The current block in our chain produces an average speed of 15 seconds per block. In other words, each transaction takes an average of 15 seconds to complete (in fact, you can wait 1-2 blocks).']},
              {'Q':'is the UIC transaction safe?','A':['after the transaction is packaged into blocks, the subsequent 6 blocks need to be confirmed before it can be considered safe. For example, if a transaction is packaged by the 1000th block, the latest block is not considered safe until 1006. The so-called insecure means that some blocks may be removed from the main chain due to conflicts (bifurcation), which is of course rare, just to understand. In operation, it is recommended not to quit the app or shut down immediately after the money is transferred out. It is better to wait for 1-2 blocks, so as not to lose the transaction due to the failure to synchronize with other miners.']},
              {'Q':'Is the UIC transaction effective？','A':['Transactions need to be packed into blocks to take effect. At present, the average speed of the blocks in our chain is 15 seconds and a block. That is to say, each transaction takes an average of 15 seconds to complete (in fact, waiting for 1-2 blocks).']},
              {'Q':'what factors will affect the amount of mining?','A':['the strength of the network signal and the number of mining machines in the same area will have some influence on mining. For example, in the same building, the total amount of mining with multiple equipment and one equipment is certain, and the more equipment there is, the less UIC there is to be dug.']}]},
            {title:'backup related',content:[{'Q':'what about password forgetting?','A':['the password is lost and cannot be recovered. Therefore, it is strongly recommended to make A backup of the password.']},
              {'Q':'what is the function of wallet backup?','A':[' if the phone is lost or initialize the restore factory Settings, the old account can through the backup file to restore the wallet data, remember put the backup file to PC, if only backup folder is also will be lost in cell phones. ; The new mnemonic account can recover data through mnemonic. If there is no backup, the original wallet data cannot be recovered after the phone is lost or initialized, and the dug UIC cannot be recovered.']},
              {'Q':'how do I backup my wallet?','A':['create A new wallet account and record the mnemonic according to the prompts. The old user needs to transfer the UIC of the old account to the new mnemonic backup account after the completion of the new account.']},
              {'Q':'if your phone is lost, can you find the UIC you found in your wallet?','A':[' if the phone is lost, if you have created A computer backup of the original account, you can import the files of the previous computer backup without logging in the new phone account. (the specific operation steps can be followed by replying to "tutorial" after the "uber smart pick" public number, viewing the novice tutorial or joining the community to contact customer service). If the new account mnemonic is backup, it can be recovered through the "wallet", "account", "add" and "import account" in the app through mnemonic.']},
              {'Q':'how do I save my wallet data?','A':['the old user needs to create A new wallet account and transfer the UIC of the original account to the new account. The new account is backup and saved by recording mnemonic.']}]},
            {title:'Browser related',content:[{'Q':'what is the browser\'s address?','A':['the browser address: http://explorer.uicbase.io/']},
              {'Q':'what does it do?','A':['you can check every transaction at Unicorn.']}]},
            {title:'Other questions',content:[{'Q':'how do I get the reward for inviting friends?','A':['1. Click "mine" -- "my reward" -- "cash out" on the "product details H5" purchase page; 2. Enter your name and alipay account; 3. We will complete the payment within 1-3 working days, and the holiday will be postponed.']},
              {'Q':'how to set the black screen on the phone?','A':['within 8 hours of mining, the mobile phone will not automatically sleep and keep sufficient power. Do not switch back stage or manually lock screen for A long time.']},
              {'Q':'what about overheating?','A':[' it is normal for the body to overheat during the first mining. During system initialization, block synchronization requires high speed operation of the system to complete initialization. The phone will return to normal after 2 hours. If it is still overheated, you can try to shut down the application and restart it later.']},
              {'Q':'what about the poor network after Unicorn APP update?','A':['after the update is completed, if the network status is not good, it is recommended to restart the phone.']},
              {'Q':'why do Unicorn APP updates synchronize blocks?','A':['after the update is normal phenomenon, need to be synchronized blocks for new blocks are produced, synchronous progress may be A slight decline, suggest waiting for synchronization, if long time synchronization schedule did not change, can restart to synchronization.']},
              {'Q':'how can I contact and solve other problems?','A':['to focus on "best customer intelligence" public, leave A message in the background, or add the micro letter, of the service in the official community consultation among our staff, also can work in time to call our customer service hotline: 400-966-1619 (working hours: 9:00-12:00 PM - 18:00) working days.']}]}]
        },
        ch:{
          bg:{
            title:'经常被问到的问题',
            subTitle:'以下是关于unicorn的一些常见问题',
            questionType:'问题分类'
          },
          listType:['Unicorn相关','UIC(优克币)相关','购买相关','售后相关','挖矿相关','钱包相关','备份相关','浏览器相关','其他问题'],
          list1:[{title:'Unicorn相关',content:[{'Q':'Unicorn是什么？','A':['Unicorn是一款基于区块链技术的全新移动智能终端操作系统，帮助包括智能设备，数字钱包，Dapps等区块链应用落地。目前Unicorn已上线区块链浏览器UICExplorer，并推出全球首款UIC区块链手机。']},{'Q':'Unicorn具有怎样的价值？','A':['简单概括来说，Unicorn是在建设未来移动版的以太坊（ETH），或移动版的EOS，都是在做生态的基础公链。','Unicorn本身不做具体应用，只做基础底层公链技术开发。因为unicorn是底层区块链操作系统，支持各类区块链应用在我们链上开发，未来会有很多应用链在我们unicorn上建设，例如支持游戏、溯源、防伪、健康、支付、金融等各个产业的区块链应用，我们要做的是一个区块链生态，而不仅仅是某项具体的区块链应用。打个比方，我们在做区块链的水电煤的基础工程建设，在建底层的区块链高速公路的基础设施，所以未来价值巨大。']}]},
            {title:'UIC（优克币）相关',content:[{'Q':'UIC（优克币）是什么？','A':['UIC（优克币）是Unicorn区块链生态的token（通证）, 应用在Unicorn的整个生态通证经济体系，unicorn是在打造一个区块链生态圈，未来支持各类实际区块链应用都会落地在unicorn区块链生态中，例如防伪、溯源、存证、大健康，电商、支付、娱乐、金融等等各类区块链应用。']},{'Q':'UIC（优克币）有什么用处？','A':['UIC就是整个生态的底层通用Token，比如未来去优克应用市场的下载收费APP，为应用程序中的增值服务付费，比如为游戏里面的装备付费，购买云存储，还有商家在应用市场投广告，这些都可以通过支付优克币来实现。']},{'Q':'UIC（优克币）的数量获取方式？','A':['UIC（优客币）总数为10亿个，总量有限且不可增发及篡改。','其中80%（8亿个）由拥有与Unicorn合作的移动智能终端的用户，通过POW算法随机获得奖励。','另外20%（2亿个）预留用于未来的移动新人网络生态建设，和运营、保障生态有序运转，包括奖励给有前瞻性DApp的开发团队，为移动智能区块链操作系统基础架构升级做出巨大贡献的个人和机构等。']}]},
            {title:'购买相关',content:[{'Q':'优客智选和UIC区块链手机、四川长虹的关系？','A':['UIC区块链手机是由Unicorn与长虹集团合作研发的首款搭载Unicorn的区块链手机。优客智选是一家专注智能硬件产品的电商平台，也是UIC区块链手机的官方指定唯一发售平台。']},
            {'Q':'UIC区块链手机购买渠道有哪些？','A':['目前只支持微信公众号“优客智选”里面购买，后续会开通PC端的购买渠道。']},
            {'Q':'购机后自己获得的专属U码在哪可以查看？','A':['进入产品首页后点击左上角“我的”—“我的U码”里面可以查看。']},
            {'Q':'有限购吗？','A':['单次只能下单一部设备，累计没有购买上限。']},
            {'Q':'专属U码有什么用？邀请好友购机有什么奖励吗？','A':['老用户（购买过1次的用户）可将您的专属U码分享出去，好友通过您的U码成功购买，您将会获得100元/台的现金奖励。']}]},
            {title:'售后相关',content:[{'Q':'采用什么渠道发货，多久可以发货？','A':['为保证给您最好的购机体验，我们将统一使用顺丰快递发货;发货时间：在您成功下单之后15个工作日之内完成发货。']},
              {'Q':'有什么售后政策？','A':['1.因UIC区块链手机是一款特殊定制的区块链手机，用户收到手机即获取了UIC账户，享有账户里面UIC的所有权，与其他长虹手机有一定区别，所以不支持退货，建议用户谨慎购买；','2. 自购机之日起15日内发生故障，支持免费换货、维修；','3. 自购机之日起15日后发生故障，在有效保修期内享受免费维修服务；','4. 手机有效保修期为1年；','5. 除本规定第1条之外，其他售后政策都与长虹其他手机一致，享受全国联保、换货及维修；','6. UIC区块链手机售后服务网点：','7. 非人为因素造成的问题，在规定售后政策规定之内，可联系客服进行换货；','8. 换货地址：','收件地址：浙江省杭州市拱墅区丰潭路508号天行国际7号楼18F。','收件人：售后部;','联系电话：400-966-1619']}]},
            {title:'挖矿相关',content:[{'Q':'UIC区块链手机与普通手机有什么差别？','A':['UIC区块链手机是全球首款搭载Unicorn公有链的区块链手机，用的是类似比特币的挖矿算法，把手机作为计算节点来运算，是分散的、去中心化的、信息不会被篡改的。']},
              {'Q':'UIC区块链手机是怎么挖矿的？','A':['打开手机上的Unicorn APP，点击一个开始按钮即可开始挖矿。']},
              {'Q':'自动挖矿怎么设置？','A':['在Unicorn APP主页点击右上角“设置”按钮，可以进行手动挖矿和自动挖矿的切换设置。需要注意，自动挖矿设置的开始时间如设置为10:00,则到18:00八小时后自动停止，每天晚上24:00所有的挖矿时间会清0。为保证自动挖矿的正常运行，务必把unicorn APP打开显示在屏幕状态。']},
              {'Q':'UIC区块链手机上的UIC后续可以交易吗？','A':['可通过钱包功能，进行个人对个人之间的转账。但暂时未上交易所流通。']},
              {'Q':'每天挖矿可以挖多少？','A':['UIC总计发行数量只有10个亿（用户可通过挖矿获取8亿个UIC，另外2亿个用于团队奖励）。第一年每15秒出一个区块，而这个产生区块的手机，将获得15个UIC的奖励。第二年开始数量会逐渐减少。挖矿数量由矿工数、网络等很多因素影响，越早挖数量越多。']},
              {'Q':'为什么我的手机连着很多日挖矿数一直为0？','A':['和矿工数、网络都会有关系，也有可能和手机硬件有关系。可以联系我们客服帮忙处理。挖矿数量多少存在一定的运气成分，不用过于担心。']},
              {'Q':'Unicorn是一条怎样的完整生态链？有什么价值？','A':['Unicorn是一个移动信任网络的生态体系，围绕着Unicorn的核心智能设备比如手机和平板电脑等，会推出UIC应用市场、UIC浏览器、UIC钱包等围绕UIC生态的各种应用。UIC是Unicorn的生态的数字货币，在可以用在Unicorn的整个生态，比如未来去UIC应用市场下载收费APP，为应用程序中的增值服务付费，比如为游戏里面的装备付费、购买云存储、还有商家在UIC应用市场投放广告，这些都通过支付UIC来实现。']},
              {'Q':'UIC钱包的注册过程，需要实名吗？','A':['UIC 钱包注册不需要实名，钱包中的UIC可以通过个人对个人的钱包进行转入转出，类似支付宝。']},
              {'Q':'如果手机坏了，UIC会丢失吗？','A':['Unicorn是安全和分布式的区块链体系，就像比特币和以太坊，数据都是永久保存，无法篡改的。所以只要您保存好您的钱包助记词，老用户原钱包备份文件和钱包密码，不要忘记或者遗失，您获得的UIC就会永远保存。（关于钱包备份详见新手教程）']},
              {'Q':'需要注册登录吗？','A':['只需首次登录设置钱包密码创建钱包即可，无需注册，以后直接点开Unicorn APP即默认登录。']},
              {'Q':'一直挖不到矿怎么办？','A':['有可能是你所在的区域矿机数量过多，或者同一时间的挖矿设备过多，可以选择换个区域或者换个时间挖矿试一试。']},
              {'Q':'挖到的U币在哪里查看为准？','A':['听到“叮当”提示音，但屏幕UIC奖励数量并没变化，属于正常现象。累计数值并非实时更新，左上角钱包点进去，看到的UIC才是实时数据；']},
              {'Q':'区块同步时间是什么意思？和区块产生时间的区别','A':['在相隔较长时间没有联网后再Unicorn app，会对这段时间产生的区块进行同步，同步时间长短与网络和产生的区块数量有直接关联。近期大批新设备的使用也会对区块同步时间产生一定影响。区块产生的时间为固定的15秒一个。']}]},
            {title:'钱包相关',content:[{'Q':'钱包新增','A':['下方“钱包”—“账户”—右上角“新增”——“新建账户”，根据助记词备份数据。新增账户可以自定义账户名称，目前新增无法删除。']},
              {'Q':'如何切换接收挖矿奖励的账户？','A':['创建多个账户切换的方式：在APP首页点击右上角“设置”，选择接收挖矿奖励的地址，即可切换接收UIC的账户。']},
              {'Q':'钱包间的UIC可以互转吗？','A':['个人对个人钱包间可以转UIC。每次转账固定手续费0.00042UIC。具体操作流程可参考新手教程。']},
              {'Q':'UIC的交易是立马生效的吗？','A':['交易需要被打包进区块后才能生效。目前我们链的区块产生平均速度为15秒一个区块。也就是说，每个交易平均需要15秒才能完成（事实上等待1-2个区块就可以了）。']},
              {'Q':'UIC的交易是安全的吗？','A':['交易被打包进区块后，需要后续6个区块确认才能认为是安全的。例如某个交易被第1000个区块打包进去了，那么需要最新区块到1006才算安全。所谓的不安全是指某些区块可能因为冲突（分叉）而被移出主链，这种事情当然也很少见，了解一下就行。操作上建议转出币后不要立即退出app或关机，最好等待1-2个区块，免得交易因没来得及同步给其他矿工而造成丢失。']},
              {'Q':'UIC的交易是立马生效的吗？','A':['交易需要被打包进区块后才能生效。目前我们链的区块产生平均速度为15秒一个区块。也就是说，每个交易平均需要15秒才能完成（事实上等待1-2个区块就可以了）。']},
              {'Q':'什么因素会影响挖矿的数量？','A':['网络信号的强弱以及同一区域内的矿机数量，都会对挖矿有一定影响。例如：在同一栋楼，多个设备和一台设备挖矿的总量是一定的，同时挖矿的设备数越多，挖到UIC的数量会减少。']}]},
            {title:'备份相关',content:[{'Q':'密码忘记怎么办？','A':['密码丢失不可找回哦~所以强烈建议建议密码做个备份，一定要注意保存。']},
              {'Q':'钱包备份的作用？','A':['如果手机丢失或初始化恢复出厂设置，老账户可通过备份的文件恢复钱包数据，记得把文件备份到电脑上，如果只是备份在手机文件夹也是会丢失的；新助记词账户可通过助记词恢复数据。如果没有备份，那么手机丢失或者初始化后，原先的钱包数据就无法恢复了，挖到的UIC也无法找回。']},
              {'Q':'如何做钱包备份？','A':['新建钱包账户，按照提示记录助记词，即可完成。老用户需要在新建账户完成后将老账户的UIC转入新助记词备份的账户。']},
              {'Q':'如果手机丢失了，是否还能找回钱包里挖到的UIC？','A':['如果手机丢失，有创建原账户电脑备份的，可在新手机账户未登陆状态下导入之前电脑备份的文件。（具体操作步骤可关注在“优客智选”公众号后，回复“教程”，查看新手教程或加入社群联系客服）。新账户助记词备份的，可通过app中“钱包”，“账户”，“新增”，“导入账户”通过助记词恢复。']},
              {'Q':'手机需要格式化该如何保存钱包数据？','A':['老用户需要新建钱包账户，并将原账户的UIC转入新账户，新账户通过记录助记词进行备份保存。']}]},
            {title:'浏览器相关',content:[{'Q':'浏览器的地址是？','A':['浏览器地址：http://explorer.uicbase.io/']},
              {'Q':'有什么作用？','A':['可查询Unicorn上的每笔交易。']}]},
            {title:'其他问题',content:[{'Q':'邀请好友获取的奖励怎么提取？','A':['1、在“产品详情H5”购买页面上点击“我的”——“我的奖励”——“提现”；2、输入您的姓名和支付宝账号；3、我们会在1-3个工作日之内完成支付宝打款，节假日顺延。']},
              {'Q':'手机会黑屏怎么设置？','A':['在挖矿8小时内，手机不会自动休眠，保持电量充足，中途不要长时间切换后台或者人为锁屏即可。']},
              {'Q':'手机过热怎么办？','A':['首次挖矿，机身过热属于正常现象。系统初始化过程中，区块同步需要系统的高速运转，才能完成初始化。2小时之后手机温度会恢复正常。如果还是过热，可以尝试关闭应用，稍后重新启动。']},
              {'Q':'Unicorn APP更新后网络不佳怎么办？','A':['更新完成后，如果网络状况显示一直不佳，建议手机重启。']},
              {'Q':'Unicorn APP更新为什么要同步区块？','A':['更新后需要同步区块为正常现象，因为新区块在不断产生，同步进度可能会稍有下降，建议等待同步，若较长时间同步进度没有变化，可重启继续同步。']},
              {'Q':'有其他问题如何联系解决？','A':['可关注“优客智选”公众号在后台留言，或添加客服微信，在官方社群当中咨询我们的工作人员，也可在工作时间拨打我们的客服热线：400-966-1619（工作时间：工作日9:00-12:00  14:00-18:00）咨询。']}]}]
        }
      },
    }
  },
  watch:{
    'scroll':'animate'
  },
  beforeRouteLeave (to, from, next) {
    this.$emit('leave',{enter:false});
    next();
  },
  methods:{
    goToType(id){
      var mTop = document.getElementById(id).offsetTop;
      this.typeIndex = id;
      this.$emit('scrollFn',(mTop + this.clientHeightImgHei + 30 - 85));
    },
    FAQscrollTop(){
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
    animate(){
      if(this.scroll>this.clientHeightImgHei + 30 - 85){
          this.$refs.ulLeft.style.position = 'fixed';
          this.$refs.ulLeft.style.top = '125px';
      }else{
        this.$refs.ulLeft.style.position = 'static';
      }

      var arr = [8,7,6,5,4,3,2,1,0];
      for(var i = 0;i<arr.length;i++){
        var mTop = document.getElementById(arr[i]).offsetTop + this.clientHeightImgHei + 30 - 85;
        if(this.scroll >= mTop){
          this.typeIndex = arr[i];
          break;
        }
      }
    },
  },
  created(){
    this.$emit('leave',{enter:true})
    this.$store.state.lang = this.$route.params.lang || 'ch';
    this.$nextTick(()=>{
      setTimeout(function(){
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      })
    })
  },
  mounted() {
    this.clientHeightImgHei = Math.round((document.documentElement.clientWidth<1200?1200:document.documentElement.clientWidth) / 1920 * 300);
    window.onresize = function temp() {
      this.clientHeightImgHei = document.documentElement.clientWidth;
    };
  }
}
</script>
<style>
  .textareaSty{
    width: 100%;
    padding: 0;
    box-sizing: border-box;
    background:#F8F9FB;
    outline: none;
    border: none;
    padding: 10px;
    resize:none;
    height:100px;
    overflow: auto;
    font-size: 16px;
  }
  .boxShade{
    height: 30px;
    background: -webkit-linear-gradient(#dbe6f1,#edf3f8);
    background: -o-linear-gradient(#dbe6f1,#edf3f8);
    background: -moz-linear-gradient(#dbe6f1,#edf3f8);
    background:linear-gradient(#dbe6f1,#edf3f8);
  }
  .colorSele{
    color: #5c58eb!important;
  }
</style>
