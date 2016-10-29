var data_language = {

	innerHTML : {
		lang_advance_help1 : '高级配置帮助',
		lang_AdvancedHelp : '<ul><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#AdvWlan">高级无线</a><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#PortForwarding">端口转换</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#DMZ">DMZ</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Parental"> 家长控制</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Filtering"> 过滤</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Qos">服务质量</span></a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Firewall"> 防火墙设置</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Shareprotection">共享保护</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#DNS">域名服务</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#DDNS">动态域名服务</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Tools"> 网络工具</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Routing">路由</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Schedules">时间表</a></li><li><a href="/cgi-bin/webproc?getpage=html/index.html&var:menu=help&var:page=helpadv#Mac_Clone">MAC 克隆</a></li></ul>'	,
		AdvWlan : '高级无线设置',
		lang_div_blackhelp_table : '<p>“无线高级设置”页面包括以下三个子菜单：</p><ul class="help_table"><li>高级设置<li>MAC 过滤<li>安全<li>WPS设置</ul><dl><dt>高级设置<dd>在此页面，您可以对您的无线网络进行更多的设置。<dl><dt>传输速率<dd>无线网络中信息接收和发送的无线连接速率。<dt>广播速率<dd>信息发送给特定接收组的速率。<dt>发射功率<dd>发射功率，是指无线路由器发射的功率的百分比。您可以选择“20%”、“40%”、“60%”、“80%”、或“100%”。<dt> Beacon间隔<dd>Beacon间隔，是指信息包从连接设备发送到其它设备的时间间隔。Beacon间隔是（与beacon发送）再次发送beacon的时间间隔。Beacon间隔是以毫秒（ms）计算。<dt>RTS阀值<dd>RTS阀值决定了发送数据包的大小，以达到控制流量的目的。<dt>分段阀值<dd>分段阀值用于分段数据包，以降低无线射频干扰。<dt>DTIM间隔<dd>DTIM间隔，用于设置客户端在省电模式下的正常工作时间间隔。<dt>前导码类型<dd>前导码类型，是CRC（循环冗余校验）阻隔路由器和无线客户端通信的长度。前导码越短，数据传输率越高。</dd></dl><br><dt>MAC 地址过滤<dd>基于MAC地址，在无线路由器上过滤连入连接。<br><dt>安全<dd>在此页面，您可以设置无线网络安全模式。<br><dt>WPS<dd>在此页面，您可以设置WPS。</dd></dl>',
		PortForwarding : '端口转换',
		lang_Multipleconnectionarer : '在某些实际应用中，需要多方连接，例如，网络游戏、视频会议、网络技术等。通过NAT（网络地址转换）技术实现这些应用，存在一定的困难。在此页面，您可以开启路由器多个端口或者一系列端口，您也可以通过这些端口将数据重定向到网络中的某台计算机上。',
		DMZ : 'DMZ',
		lang_DMZ : '<dl><dt>DMZ 主机<dd><p>DMZ，即隔离区。如果路由器不能某些应用功能，您可以将一台计算机暴露在因特网，并且在该计算机上运行此应用功能。</p><p>如果将局域网主机设置为DMZ主机，该DMZ主机成为所有与其它进入会话或规则不匹配的进入数据包的目的地。如果设置了进入规则，那么，不需要将包发送给DMZ主机。有效会话、虚拟服务器、有效端口触发或端口转发规则会优先于将包发送给DMZ主机。（DMZ策略类似默认端口转发规则将所有端口对外开放） </p><dd><p><B>注意:</B>将计算机放置在DMZ区，可能让计算机暴露在一些列安全隐患中。请慎用此功能。 </p><dl><dt>DMZ IP 地址<dd>设置您想要不受限制进行因特网通信的局域网计算机的LAN端IP地址。如果该计算机是通过DHCP自动获取地址，而您希望保留“基本网络设置”页面的设置，那么DMZ主机的IP地址不会改变。</dd></dl></dd></dl>',
		Parental : '家长控制',
		lang_Parentaldsc : '<dl><dt>拒绝网站<dd>在此页面，您可以拒绝访问某些网站。例如，您可能拒绝访问www.block thiswebsite.com，那么在您设置的日程中不能对该网站进行访问。<dt>拒绝MAC地址<dd><p>在家庭应用中，父母可以在特定的时间和日期，限制某些电脑访问因特网。</p> </dd></dl>',
		FilteringOptions : '过滤',
		lang_FilteringOptions : '<p>您可以使用过滤功能对输入流和输出流进行管理。点击“IP过滤”或者“桥过滤”按钮，进入下一步设置。</p><dl><dt>IP 过滤<dd><p>在这个页面，您可以指定一个过滤器名称和至少一个条件来创建一个过滤器，该过滤器会自动过滤从所设置的IP传入的流量。您指定的所有条件会同时生效。点击"应用"按钮就会保存您所设置的条件，并且会同时开启过滤功能。</p><dt>桥过滤<dd>桥接过滤也称MAC地址过滤。您可以根据源MAC地址或目的MAC地址，转发或者拒绝输入流。注意：您必须在设置为桥接的接口下使用桥接过滤功能。</dd></dl>',
		QOS : '服务质量',
		lang_qos : 'QoS，即服务质量。QoS用于分配和保证吞吐量，限制或提高某些计算机的因特网连接速度。',
		FirewallSettings : '防火墙设置',
		lang_FirewallSettings : '在此页面，您可以保护您的路由器防止DoS攻击。',
		Shareprotection : '共享保护',
		lang_shareprotection : '共享保护功能允许多台PC通过路由器实现共享上网而不受服务提供商的限制。请使能相关选项、配置合适的值并点击“应用”按钮以激活此功能。',
		DNS : 'DNS',
		lang_dns : 'DNS，即域名服务器，它是将URL/域名解析成对应的IP地址。虽然URL/域名是按字母排序，便于记忆，但是因特网是基于IP地址进行相互通信的。',
		DDNS : 'DDNS',
		lang_ddns : '<dl><dt>D-DNS 提供商<dd>从下拉框中选择一个动态的DNS服务商。<dt>主机名<dd>输入正确的主机名，例如： <b>myhost.mydomain.net.</b><dt>用户名<dd>输入您的服务商提供的用户名。<dt>密码<dd>输入您的服务商提供的密码。</dl>',
		NetworkTools : '网络工具',
		lang_NetworkTools : '<dl><dt> 端口绑定<dd>端口映射支持一个或多个（局域网）端口形成一个组或者映射到一条PVC（或形成w/a VLAN）。LAN端口的每个组都会作为一个独立（逻辑）网络（如广播区域），这些独立（逻辑）网络会阻止流广播。在家庭多媒体应用中，需要形成多个独立（逻辑）网络时，端口映射功能非常有用。例如，映射PVC1到端口1到端口3，创建一条网络（广播区域）为电脑提供因特网服务。映射PVC2到端口4，创建另一条网络（广播区域）提供IPTV服务。使用此功能（w/ multiple PVCs），数据流和IPTV流不会相互影响。<dt>组播<dd>IGMP支持有效广播，将单一的信息，例如，多媒体从广播源发送给一组接收者。<dt>UPnP<dd>UPnP，即通用即插即用，它是一种为网络设备、软件和外围设备提供兼容网络连接的体系结构。开启UPnP功能，可以连接路由器和其它UPnP设备和软件。<dt>ADSL<dd>在此页面，您可以选择您的ISP提供的ADSL调制模式和ADSL性能。请咨询ISP，选择正确的模式和性能。设置完成后，点击“应用”按钮，保存设置。如果需要对路由器进行更高级的设置，请点击“高级设置”。</dd></dl>',
		Routing : '路由',
		lang_Routing : '在此页面，您可以设置静态路由、策略路由、默认网关和RIP类型等其它路由配置。',
		Schedules : '时间表',
		lang_Schedules : '<p>您可以创建日程，用于加强规则。例如，您需要从星期一到星期五的下午3：00到晚上8：00限制网络访问。那么，您需要创建日程表。选择星期一到星期五的复选框，在开始时间栏和结束时间栏分别输入下午3：00和晚上8：00。</p><dl><dt>增加/编辑时间<dd>在此栏，您可以在下面的日程规则表中添加规则或编辑已经存在的规则。<dl><dt>名字<dd>输入您想设置的名字，例如“万川时间”。<dt>日期<dd>根据您的实际需要选择复选框。您也可以选择“All Week”单选框，选择一周七天。<dt>全天 - 24 小时<dd>如果您希望在选中的日期内全天有效，请选择此复选框。<dt>起始时间<dd>如果您不选择“全天”，请在此栏输入开始时间。请在第一栏输入小时，第二栏输入分钟。通常，在开始时间前触发邮件事件。<dt>结束时间<dd>请在此栏输入结束时间。结束时间和开始时间格式一致。在第一栏输入小时，第二栏输入分钟。结束时间对大多数规则有效，但不适用于邮件事件。<dt>提交<dd>点击“提交”按钮，保存新添加的规则或者保存修改的时间规则。设置完成后，请点击“提交”按钮，以使设置永久生效。</dd></dl><dt>时间表规则清单<dd>您可以设置的日程规则。点击“<span class=button_ref>编辑</span>”按钮，修改日程规则。点击“<span class=button_ref>删除</span>”按钮，删除规则。点击“编辑”按钮，您可以在“编辑日程规则”栏，修改日程。</dd></dl>',
		Mac_Clone : 'MAC克隆',
		lang_macclone : '通过MAC克隆可以修改网卡MAC，使局域网中的计算机实现共享上网。'
	}
	
}