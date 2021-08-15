const mimetype: any = {
	".123": "application/vnd.lotus-1-2-3",
	".3dml": "text/vnd.in3d.3dml",
	".3g2": "video/3gpp2",
	".3gp": "video/3gpp",
	".a": "application/octet-stream",
	".aab": "application/x-authorware-bin",
	".aac": "audio/x-aac",
	".aam": "application/x-authorware-map",
	".aas": "application/x-authorware-seg",
	".abw": "application/x-abiword",
	".acc": "application/vnd.americandynamics.acc",
	".ace": "application/x-ace-compressed",
	".acu": "application/vnd.acucobol",
	".acutc": "application/vnd.acucorp",
	".adp": "audio/adpcm",
	".aep": "application/vnd.audiograph",
	".afm": "application/x-font-type1",
	".afp": "application/vnd.ibm.modcap",
	".ai": "application/postscript",
	".aif": "audio/x-aiff",
	".aifc": "audio/x-aiff",
	".aiff": "audio/x-aiff",
	".air": "application/vnd.adobe.air-application-installer-package+zip",
	".ami": "application/vnd.amiga.ami",
	".apk": "application/vnd.android.package-archive",
	".application": "application/x-ms-application",
	".apr": "application/vnd.lotus-approach",
	".asc": "application/pgp-signature",
	".asf": "video/x-ms-asf",
	".asm": "text/x-asm",
	".aso": "application/vnd.accpac.simply.aso",
	".asx": "video/x-ms-asf",
	".atc": "application/vnd.acucorp",
	".atom": "application/atom+xml",
	".atomcat": "application/atomcat+xml",
	".atomsvc": "application/atomsvc+xml",
	".atx": "application/vnd.antix.game-component",
	".au": "audio/basic",
	".avi": "video/x-msvideo",
	".aw": "application/applixware",
	".azf": "application/vnd.airzip.filesecure.azf",
	".azs": "application/vnd.airzip.filesecure.azs",
	".azw": "application/vnd.amazon.ebook",
	".bat": "application/x-msdownload",
	".bcpio": "application/x-bcpio",
	".bdf": "application/x-font-bdf",
	".bdm": "application/vnd.syncml.dm+wbxml",
	".bh2": "application/vnd.fujitsu.oasysprs",
	".bin": "application/octet-stream",
	".bmi": "application/vnd.bmi",
	".bmp": "image/bmp",
	".book": "application/vnd.framemaker",
	".box": "application/vnd.previewsystems.box",
	".boz": "application/x-bzip2",
	".bpk": "application/octet-stream",
	".btif": "image/prs.btif",
	".bz": "application/x-bzip",
	".bz2": "application/x-bzip2",
	".c": "text/x-c",
	".c4d": "application/vnd.clonk.c4group",
	".c4f": "application/vnd.clonk.c4group",
	".c4g": "application/vnd.clonk.c4group",
	".c4p": "application/vnd.clonk.c4group",
	".c4u": "application/vnd.clonk.c4group",
	".cab": "application/vnd.ms-cab-compressed",
	".car": "application/vnd.curl.car",
	".cat": "application/vnd.ms-pki.seccat",
	".cc": "text/x-c",
	".cct": "application/x-director",
	".ccxml": "application/ccxml+xml",
	".cdbcmsg": "application/vnd.contact.cmsg",
	".cdf": "application/x-netcdf",
	".cdkey": "application/vnd.mediastation.cdkey",
	".cdx": "chemical/x-cdx",
	".cdxml": "application/vnd.chemdraw+xml",
	".cdy": "application/vnd.cinderella",
	".cer": "application/pkix-cert",
	".cgm": "image/cgm",
	".chat": "application/x-chat",
	".chm": "application/vnd.ms-htmlhelp",
	".chrt": "application/vnd.kde.kchart",
	".cif": "chemical/x-cif",
	".cii": "application/vnd.anser-web-certificate-issue-initiation",
	".cil": "application/vnd.ms-artgalry",
	".cla": "application/vnd.claymore",
	".class": "application/java-vm",
	".clkk": "application/vnd.crick.clicker.keyboard",
	".clkp": "application/vnd.crick.clicker.palette",
	".clkt": "application/vnd.crick.clicker.template",
	".clkw": "application/vnd.crick.clicker.wordbank",
	".clkx": "application/vnd.crick.clicker",
	".clp": "application/x-msclip",
	".cmc": "application/vnd.cosmocaller",
	".cmdf": "chemical/x-cmdf",
	".cml": "chemical/x-cml",
	".cmp": "application/vnd.yellowriver-custom-menu",
	".cmx": "image/x-cmx",
	".cod": "application/vnd.rim.cod",
	".com": "application/x-msdownload",
	".conf": "text/plain",
	".cpio": "application/x-cpio",
	".cpp": "text/x-c",
	".cpt": "application/mac-compactpro",
	".crd": "application/x-mscardfile",
	".crl": "application/pkix-crl",
	".crt": "application/x-x509-ca-cert",
	".csh": "application/x-csh",
	".csml": "chemical/x-csml",
	".csp": "application/vnd.commonspace",
	".css": "text/css",
	".cst": "application/x-director",
	".csv": "text/csv",
	".cu": "application/cu-seeme",
	".curl": "text/vnd.curl",
	".cww": "application/prs.cww",
	".cxt": "application/x-director",
	".cxx": "text/x-c",
	".daf": "application/vnd.mobius.daf",
	".dataless": "application/vnd.fdsn.seed",
	".davmount": "application/davmount+xml",
	".dcr": "application/x-director",
	".dcurl": "text/vnd.curl.dcurl",
	".dd2": "application/vnd.oma.dd2+xml",
	".ddd": "application/vnd.fujixerox.ddd",
	".deb": "application/x-debian-package",
	".def": "text/plain",
	".deploy": "application/octet-stream",
	".der": "application/x-x509-ca-cert",
	".dfac": "application/vnd.dreamfactory",
	".dic": "text/x-c",
	".diff": "text/plain",
	".dir": "application/x-director",
	".dis": "application/vnd.mobius.dis",
	".dist": "application/octet-stream",
	".distz": "application/octet-stream",
	".djv": "image/vnd.djvu",
	".djvu": "image/vnd.djvu",
	".dll": "application/x-msdownload",
	".dmg": "application/octet-stream",
	".dms": "application/octet-stream",
	".dna": "application/vnd.dna",
	".doc": "application/msword",
	".docm": "application/vnd.ms-word.document.macroenabled.12",
	".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
	".dot": "application/msword",
	".dotm": "application/vnd.ms-word.template.macroenabled.12",
	".dotx": "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
	".dp": "application/vnd.osgi.dp",
	".dpg": "application/vnd.dpgraph",
	".dsc": "text/prs.lines.tag",
	".dtb": "application/x-dtbook+xml",
	".dtd": "application/xml-dtd",
	".dts": "audio/vnd.dts",
	".dtshd": "audio/vnd.dts.hd",
	".dump": "application/octet-stream",
	".dvi": "application/x-dvi",
	".dwf": "model/vnd.dwf",
	".dwg": "image/vnd.dwg",
	".dxf": "image/vnd.dxf",
	".dxp": "application/vnd.spotfire.dxp",
	".dxr": "application/x-director",
	".ecelp4800": "audio/vnd.nuera.ecelp4800",
	".ecelp7470": "audio/vnd.nuera.ecelp7470",
	".ecelp9600": "audio/vnd.nuera.ecelp9600",
	".ecma": "application/ecmascript",
	".edm": "application/vnd.novadigm.edm",
	".edx": "application/vnd.novadigm.edx",
	".efif": "application/vnd.picsel",
	".ei6": "application/vnd.pg.osasli",
	".elc": "application/octet-stream",
	".eml": "message/rfc822",
	".emma": "application/emma+xml",
	".eol": "audio/vnd.digital-winds",
	".eot": "application/vnd.ms-fontobject",
	".eps": "application/postscript",
	".epub": "application/epub+zip",
	".es3": "application/vnd.eszigno3+xml",
	".esf": "application/vnd.epson.esf",
	".et3": "application/vnd.eszigno3+xml",
	".etx": "text/x-setext",
	".exe": "application/x-msdownload",
	".ext": "application/vnd.novadigm.ext",
	".ez": "application/andrew-inset",
	".ez2": "application/vnd.ezpix-album",
	".ez3": "application/vnd.ezpix-package",
	".f": "text/x-fortran",
	".f4v": "video/x-f4v",
	".f77": "text/x-fortran",
	".f90": "text/x-fortran",
	".fbs": "image/vnd.fastbidsheet",
	".fdf": "application/vnd.fdf",
	".fe_launch": "application/vnd.denovo.fcselayout-link",
	".fg5": "application/vnd.fujitsu.oasysgp",
	".fgd": "application/x-director",
	".fh": "image/x-freehand",
	".fh4": "image/x-freehand",
	".fh5": "image/x-freehand",
	".fh7": "image/x-freehand",
	".fhc": "image/x-freehand",
	".fig": "application/x-xfig",
	".fli": "video/x-fli",
	".flo": "application/vnd.micrografx.flo",
	".flv": "video/x-flv",
	".flw": "application/vnd.kde.kivio",
	".flx": "text/vnd.fmi.flexstor",
	".fly": "text/vnd.fly",
	".fm": "application/vnd.framemaker",
	".fnc": "application/vnd.frogans.fnc",
	".for": "text/x-fortran",
	".fpx": "image/vnd.fpx",
	".frame": "application/vnd.framemaker",
	".fsc": "application/vnd.fsc.weblaunch",
	".fst": "image/vnd.fst",
	".ftc": "application/vnd.fluxtime.clip",
	".fti": "application/vnd.anser-web-funds-transfer-initiation",
	".fvt": "video/vnd.fvt",
	".fzs": "application/vnd.fuzzysheet",
	".g3": "image/g3fax",
	".gac": "application/vnd.groove-account",
	".gdl": "model/vnd.gdl",
	".geo": "application/vnd.dynageo",
	".gex": "application/vnd.geometry-explorer",
	".ggb": "application/vnd.geogebra.file",
	".ggt": "application/vnd.geogebra.tool",
	".ghf": "application/vnd.groove-help",
	".gif": "image/gif",
	".gim": "application/vnd.groove-identity-message",
	".gmx": "application/vnd.gmx",
	".gnumeric": "application/x-gnumeric",
	".gph": "application/vnd.flographit",
	".gqf": "application/vnd.grafeq",
	".gqs": "application/vnd.grafeq",
	".gram": "application/srgs",
	".gre": "application/vnd.geometry-explorer",
	".grv": "application/vnd.groove-injector",
	".grxml": "application/srgs+xml",
	".gsf": "application/x-font-ghostscript",
	".gtar": "application/x-gtar",
	".gtm": "application/vnd.groove-tool-message",
	".gtw": "model/vnd.gtw",
	".gv": "text/vnd.graphviz",
	".gz": "application/x-gzip",
	".h": "text/x-c",
	".h261": "video/h261",
	".h263": "video/h263",
	".h264": "video/h264",
	".hbci": "application/vnd.hbci",
	".hdf": "application/x-hdf",
	".hh": "text/x-c",
	".hlp": "application/winhlp",
	".hpgl": "application/vnd.hp-hpgl",
	".hpid": "application/vnd.hp-hpid",
	".hps": "application/vnd.hp-hps",
	".hqx": "application/mac-binhex40",
	".htke": "application/vnd.kenameaapp",
	".htm": "text/html",
	".html": "text/html",
	".hvd": "application/vnd.yamaha.hv-dic",
	".hvp": "application/vnd.yamaha.hv-voice",
	".hvs": "application/vnd.yamaha.hv-script",
	".icc": "application/vnd.iccprofile",
	".ice": "x-conference/x-cooltalk",
	".icm": "application/vnd.iccprofile",
	".ico": "image/x-icon",
	".ics": "text/calendar",
	".ief": "image/ief",
	".ifb": "text/calendar",
	".ifm": "application/vnd.shana.informed.formdata",
	".iges": "model/iges",
	".igl": "application/vnd.igloader",
	".igs": "model/iges",
	".igx": "application/vnd.micrografx.igx",
	".iif": "application/vnd.shana.informed.interchange",
	".imp": "application/vnd.accpac.simply.imp",
	".ims": "application/vnd.ms-ims",
	".in": "text/plain",
	".ipk": "application/vnd.shana.informed.package",
	".irm": "application/vnd.ibm.rights-management",
	".irp": "application/vnd.irepository.package+xml",
	".iso": "application/octet-stream",
	".itp": "application/vnd.shana.informed.formtemplate",
	".ivp": "application/vnd.immervision-ivp",
	".ivu": "application/vnd.immervision-ivu",
	".jad": "text/vnd.sun.j2me.app-descriptor",
	".jam": "application/vnd.jam",
	".jar": "application/java-archive",
	".java": "text/x-java-source",
	".jisp": "application/vnd.jisp",
	".jlt": "application/vnd.hp-jlyt",
	".jnlp": "application/x-java-jnlp-file",
	".joda": "application/vnd.joost.joda-archive",
	".jpe": "image/jpeg",
	".jpeg": "image/jpeg",
	".jpg": "image/jpeg",
	".jpgm": "video/jpm",
	".jpgv": "video/jpeg",
	".jpm": "video/jpm",
	".js": "application/javascript",
	".json": "application/json",
	".kar": "audio/midi",
	".karbon": "application/vnd.kde.karbon",
	".kfo": "application/vnd.kde.kformula",
	".kia": "application/vnd.kidspiration",
	".kil": "application/x-killustrator",
	".kml": "application/vnd.google-earth.kml+xml",
	".kmz": "application/vnd.google-earth.kmz",
	".kne": "application/vnd.kinar",
	".knp": "application/vnd.kinar",
	".kon": "application/vnd.kde.kontour",
	".kpr": "application/vnd.kde.kpresenter",
	".kpt": "application/vnd.kde.kpresenter",
	".ksh": "text/plain",
	".ksp": "application/vnd.kde.kspread",
	".ktr": "application/vnd.kahootz",
	".ktz": "application/vnd.kahootz",
	".kwd": "application/vnd.kde.kword",
	".kwt": "application/vnd.kde.kword",
	".latex": "application/x-latex",
	".lbd": "application/vnd.llamagraphics.life-balance.desktop",
	".lbe": "application/vnd.llamagraphics.life-balance.exchange+xml",
	".les": "application/vnd.hhe.lesson-player",
	".lha": "application/octet-stream",
	".link66": "application/vnd.route66.link66+xml",
	".list": "text/plain",
	".list3820": "application/vnd.ibm.modcap",
	".listafp": "application/vnd.ibm.modcap",
	".log": "text/plain",
	".lostxml": "application/lost+xml",
	".lrf": "application/octet-stream",
	".lrm": "application/vnd.ms-lrm",
	".ltf": "application/vnd.frogans.ltf",
	".lvp": "audio/vnd.lucent.voice",
	".lwp": "application/vnd.lotus-wordpro",
	".lzh": "application/octet-stream",
	".m13": "application/x-msmediaview",
	".m14": "application/x-msmediaview",
	".m1v": "video/mpeg",
	".m2a": "audio/mpeg",
	".m2v": "video/mpeg",
	".m3a": "audio/mpeg",
	".m3u": "audio/x-mpegurl",
	".m4u": "video/vnd.mpegurl",
	".m4v": "video/x-m4v",
	".ma": "application/mathematica",
	".mag": "application/vnd.ecowin.chart",
	".maker": "application/vnd.framemaker",
	".man": "text/troff",
	".mathml": "application/mathml+xml",
	".mb": "application/mathematica",
	".mbk": "application/vnd.mobius.mbk",
	".mbox": "application/mbox",
	".mc1": "application/vnd.medcalcdata",
	".mcd": "application/vnd.mcd",
	".mcurl": "text/vnd.curl.mcurl",
	".mdb": "application/x-msaccess",
	".mdi": "image/vnd.ms-modi",
	".me": "text/troff",
	".mesh": "model/mesh",
	".mfm": "application/vnd.mfmp",
	".mgz": "application/vnd.proteus.magazine",
	".mht": "message/rfc822",
	".mhtml": "message/rfc822",
	".mid": "audio/midi",
	".midi": "audio/midi",
	".mif": "application/vnd.mif",
	".mime": "message/rfc822",
	".mj2": "video/mj2",
	".mjp2": "video/mj2",
	".mlp": "application/vnd.dolby.mlp",
	".mmd": "application/vnd.chipnuts.karaoke-mmd",
	".mmf": "application/vnd.smaf",
	".mmr": "image/vnd.fujixerox.edmics-mmr",
	".mny": "application/x-msmoney",
	".mobi": "application/x-mobipocket-ebook",
	".mov": "video/quicktime",
	".movie": "video/x-sgi-movie",
	".mp2": "audio/mpeg",
	".mp2a": "audio/mpeg",
	".mp3": "audio/mpeg",
	".mp4": "video/mp4",
	".mp4a": "audio/mp4",
	".mp4s": "application/mp4",
	".mp4v": "video/mp4",
	".mpa": "video/mpeg",
	".mpc": "application/vnd.mophun.certificate",
	".mpe": "video/mpeg",
	".mpeg": "video/mpeg",
	".mpg": "video/mpeg",
	".mpg4": "video/mp4",
	".mpga": "audio/mpeg",
	".mpkg": "application/vnd.apple.installer+xml",
	".mpm": "application/vnd.blueice.multipass",
	".mpn": "application/vnd.mophun.application",
	".mpp": "application/vnd.ms-project",
	".mpt": "application/vnd.ms-project",
	".mpy": "application/vnd.ibm.minipay",
	".mqy": "application/vnd.mobius.mqy",
	".mrc": "application/marc",
	".ms": "text/troff",
	".mscml": "application/mediaservercontrol+xml",
	".mseed": "application/vnd.fdsn.mseed",
	".mseq": "application/vnd.mseq",
	".msf": "application/vnd.epson.msf",
	".msh": "model/mesh",
	".msi": "application/x-msdownload",
	".msl": "application/vnd.mobius.msl",
	".msty": "application/vnd.muvee.style",
	".mts": "model/vnd.mts",
	".mus": "application/vnd.musician",
	".musicxml": "application/vnd.recordare.musicxml+xml",
	".mvb": "application/x-msmediaview",
	".mwf": "application/vnd.mfer",
	".mxf": "application/mxf",
	".mxl": "application/vnd.recordare.musicxml",
	".mxml": "application/xv+xml",
	".mxs": "application/vnd.triscape.mxs",
	".mxu": "video/vnd.mpegurl",
	".n-gage": "application/vnd.nokia.n-gage.symbian.install",
	".nb": "application/mathematica",
	".nc": "application/x-netcdf",
	".ncx": "application/x-dtbncx+xml",
	".ngdat": "application/vnd.nokia.n-gage.data",
	".nlu": "application/vnd.neurolanguage.nlu",
	".nml": "application/vnd.enliven",
	".nnd": "application/vnd.noblenet-directory",
	".nns": "application/vnd.noblenet-sealer",
	".nnw": "application/vnd.noblenet-web",
	".npx": "image/vnd.net-fpx",
	".nsf": "application/vnd.lotus-notes",
	".nws": "message/rfc822",
	".o": "application/octet-stream",
	".oa2": "application/vnd.fujitsu.oasys2",
	".oa3": "application/vnd.fujitsu.oasys3",
	".oas": "application/vnd.fujitsu.oasys",
	".obd": "application/x-msbinder",
	".obj": "application/octet-stream",
	".oda": "application/oda",
	".odb": "application/vnd.oasis.opendocument.database",
	".odc": "application/vnd.oasis.opendocument.chart",
	".odf": "application/vnd.oasis.opendocument.formula",
	".odft": "application/vnd.oasis.opendocument.formula-template",
	".odg": "application/vnd.oasis.opendocument.graphics",
	".odi": "application/vnd.oasis.opendocument.image",
	".odp": "application/vnd.oasis.opendocument.presentation",
	".ods": "application/vnd.oasis.opendocument.spreadsheet",
	".odt": "application/vnd.oasis.opendocument.text",
	".oga": "audio/ogg",
	".ogg": "audio/ogg",
	".ogv": "video/ogg",
	".ogx": "application/ogg",
	".onepkg": "application/onenote",
	".onetmp": "application/onenote",
	".onetoc": "application/onenote",
	".onetoc2": "application/onenote",
	".opf": "application/oebps-package+xml",
	".oprc": "application/vnd.palm",
	".org": "application/vnd.lotus-organizer",
	".osf": "application/vnd.yamaha.openscoreformat",
	".osfpvg": "application/vnd.yamaha.openscoreformat.osfpvg+xml",
	".otc": "application/vnd.oasis.opendocument.chart-template",
	".otf": "application/x-font-otf",
	".otg": "application/vnd.oasis.opendocument.graphics-template",
	".oth": "application/vnd.oasis.opendocument.text-web",
	".oti": "application/vnd.oasis.opendocument.image-template",
	".otm": "application/vnd.oasis.opendocument.text-master",
	".otp": "application/vnd.oasis.opendocument.presentation-template",
	".ots": "application/vnd.oasis.opendocument.spreadsheet-template",
	".ott": "application/vnd.oasis.opendocument.text-template",
	".oxt": "application/vnd.openofficeorg.extension",
	".p": "text/x-pascal",
	".p10": "application/pkcs10",
	".p12": "application/x-pkcs12",
	".p7b": "application/x-pkcs7-certificates",
	".p7c": "application/pkcs7-mime",
	".p7m": "application/pkcs7-mime",
	".p7r": "application/x-pkcs7-certreqresp",
	".p7s": "application/pkcs7-signature",
	".pas": "text/x-pascal",
	".pbd": "application/vnd.powerbuilder6",
	".pbm": "image/x-portable-bitmap",
	".pcf": "application/x-font-pcf",
	".pcl": "application/vnd.hp-pcl",
	".pclxl": "application/vnd.hp-pclxl",
	".pct": "image/x-pict",
	".pcurl": "application/vnd.curl.pcurl",
	".pcx": "image/x-pcx",
	".pdb": "application/vnd.palm",
	".pdf": "application/pdf",
	".pfa": "application/x-font-type1",
	".pfb": "application/x-font-type1",
	".pfm": "application/x-font-type1",
	".pfr": "application/font-tdpfr",
	".pfx": "application/x-pkcs12",
	".pgm": "image/x-portable-graymap",
	".pgn": "application/x-chess-pgn",
	".pgp": "application/pgp-encrypted",
	".pic": "image/x-pict",
	".pkg": "application/octet-stream",
	".pki": "application/pkixcmp",
	".pkipath": "application/pkix-pkipath",
	".pl": "text/plain",
	".plb": "application/vnd.3gpp.pic-bw-large",
	".plc": "application/vnd.mobius.plc",
	".plf": "application/vnd.pocketlearn",
	".pls": "application/pls+xml",
	".pml": "application/vnd.ctc-posml",
	".png": "image/png",
	".pnm": "image/x-portable-anymap",
	".portpkg": "application/vnd.macports.portpkg",
	".pot": "application/vnd.ms-powerpoint",
	".potm": "application/vnd.ms-powerpoint.template.macroenabled.12",
	".potx": "application/vnd.openxmlformats-officedocument.presentationml.template",
	".ppa": "application/vnd.ms-powerpoint",
	".ppam": "application/vnd.ms-powerpoint.addin.macroenabled.12",
	".ppd": "application/vnd.cups-ppd",
	".ppm": "image/x-portable-pixmap",
	".pps": "application/vnd.ms-powerpoint",
	".ppsm": "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
	".ppsx": "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
	".ppt": "application/vnd.ms-powerpoint",
	".pptm": "application/vnd.ms-powerpoint.presentation.macroenabled.12",
	".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
	".pqa": "application/vnd.palm",
	".prc": "application/x-mobipocket-ebook",
	".pre": "application/vnd.lotus-freelance",
	".prf": "application/pics-rules",
	".ps": "application/postscript",
	".psb": "application/vnd.3gpp.pic-bw-small",
	".psd": "image/vnd.adobe.photoshop",
	".psf": "application/x-font-linux-psf",
	".ptid": "application/vnd.pvi.ptid1",
	".pub": "application/x-mspublisher",
	".pvb": "application/vnd.3gpp.pic-bw-var",
	".pwn": "application/vnd.3m.post-it-notes",
	".pwz": "application/vnd.ms-powerpoint",
	".py": "text/x-python",
	".pya": "audio/vnd.ms-playready.media.pya",
	".pyc": "application/x-python-code",
	".pyo": "application/x-python-code",
	".pyv": "video/vnd.ms-playready.media.pyv",
	".qam": "application/vnd.epson.quickanime",
	".qbo": "application/vnd.intu.qbo",
	".qfx": "application/vnd.intu.qfx",
	".qps": "application/vnd.publishare-delta-tree",
	".qt": "video/quicktime",
	".qwd": "application/vnd.quark.quarkxpress",
	".qwt": "application/vnd.quark.quarkxpress",
	".qxb": "application/vnd.quark.quarkxpress",
	".qxd": "application/vnd.quark.quarkxpress",
	".qxl": "application/vnd.quark.quarkxpress",
	".qxt": "application/vnd.quark.quarkxpress",
	".ra": "audio/x-pn-realaudio",
	".ram": "audio/x-pn-realaudio",
	".rar": "application/x-rar-compressed",
	".ras": "image/x-cmu-raster",
	".rcprofile": "application/vnd.ipunplugged.rcprofile",
	".rdf": "application/rdf+xml",
	".rdz": "application/vnd.data-vision.rdz",
	".rep": "application/vnd.businessobjects",
	".res": "application/x-dtbresource+xml",
	".rgb": "image/x-rgb",
	".rif": "application/reginfo+xml",
	".rl": "application/resource-lists+xml",
	".rlc": "image/vnd.fujixerox.edmics-rlc",
	".rld": "application/resource-lists-diff+xml",
	".rm": "application/vnd.rn-realmedia",
	".rmi": "audio/midi",
	".rmp": "audio/x-pn-realaudio-plugin",
	".rms": "application/vnd.jcp.javame.midlet-rms",
	".rnc": "application/relax-ng-compact-syntax",
	".roff": "text/troff",
	".rpm": "application/x-rpm",
	".rpss": "application/vnd.nokia.radio-presets",
	".rpst": "application/vnd.nokia.radio-preset",
	".rq": "application/sparql-query",
	".rs": "application/rls-services+xml",
	".rsd": "application/rsd+xml",
	".rss": "application/rss+xml",
	".rtf": "application/rtf",
	".rtx": "text/richtext",
	".s": "text/x-asm",
	".saf": "application/vnd.yamaha.smaf-audio",
	".sbml": "application/sbml+xml",
	".sc": "application/vnd.ibm.secure-container",
	".scd": "application/x-msschedule",
	".scm": "application/vnd.lotus-screencam",
	".scq": "application/scvp-cv-request",
	".scs": "application/scvp-cv-response",
	".scurl": "text/vnd.curl.scurl",
	".sda": "application/vnd.stardivision.draw",
	".sdc": "application/vnd.stardivision.calc",
	".sdd": "application/vnd.stardivision.impress",
	".sdkd": "application/vnd.solent.sdkm+xml",
	".sdkm": "application/vnd.solent.sdkm+xml",
	".sdp": "application/sdp",
	".sdw": "application/vnd.stardivision.writer",
	".see": "application/vnd.seemail",
	".seed": "application/vnd.fdsn.seed",
	".sema": "application/vnd.sema",
	".semd": "application/vnd.semd",
	".semf": "application/vnd.semf",
	".ser": "application/java-serialized-object",
	".setpay": "application/set-payment-initiation",
	".setreg": "application/set-registration-initiation",
	".sfd-hdstx": "application/vnd.hydrostatix.sof-data",
	".sfs": "application/vnd.spotfire.sfs",
	".sgl": "application/vnd.stardivision.writer-global",
	".sgm": "text/sgml",
	".sgml": "text/sgml",
	".sh": "application/x-sh",
	".shar": "application/x-shar",
	".shf": "application/shf+xml",
	".si": "text/vnd.wap.si",
	".sic": "application/vnd.wap.sic",
	".sig": "application/pgp-signature",
	".silo": "model/mesh",
	".sis": "application/vnd.symbian.install",
	".sisx": "application/vnd.symbian.install",
	".sit": "application/x-stuffit",
	".sitx": "application/x-stuffitx",
	".skd": "application/vnd.koan",
	".skm": "application/vnd.koan",
	".skp": "application/vnd.koan",
	".skt": "application/vnd.koan",
	".sl": "text/vnd.wap.sl",
	".slc": "application/vnd.wap.slc",
	".sldm": "application/vnd.ms-powerpoint.slide.macroenabled.12",
	".sldx": "application/vnd.openxmlformats-officedocument.presentationml.slide",
	".slt": "application/vnd.epson.salt",
	".smf": "application/vnd.stardivision.math",
	".smi": "application/smil+xml",
	".smil": "application/smil+xml",
	".snd": "audio/basic",
	".snf": "application/x-font-snf",
	".so": "application/octet-stream",
	".spc": "application/x-pkcs7-certificates",
	".spf": "application/vnd.yamaha.smaf-phrase",
	".spl": "application/x-futuresplash",
	".spot": "text/vnd.in3d.spot",
	".spp": "application/scvp-vp-response",
	".spq": "application/scvp-vp-request",
	".spx": "audio/ogg",
	".src": "application/x-wais-source",
	".srx": "application/sparql-results+xml",
	".sse": "application/vnd.kodak-descriptor",
	".ssf": "application/vnd.epson.ssf",
	".ssml": "application/ssml+xml",
	".stc": "application/vnd.sun.xml.calc.template",
	".std": "application/vnd.sun.xml.draw.template",
	".stf": "application/vnd.wt.stf",
	".sti": "application/vnd.sun.xml.impress.template",
	".stk": "application/hyperstudio",
	".stl": "application/vnd.ms-pki.stl",
	".str": "application/vnd.pg.format",
	".stw": "application/vnd.sun.xml.writer.template",
	".sus": "application/vnd.sus-calendar",
	".susp": "application/vnd.sus-calendar",
	".sv4cpio": "application/x-sv4cpio",
	".sv4crc": "application/x-sv4crc",
	".svd": "application/vnd.svd",
	".svg": "image/svg+xml",
	".svgz": "image/svg+xml",
	".swa": "application/x-director",
	".swf": "application/x-shockwave-flash",
	".swi": "application/vnd.arastra.swi",
	".sxc": "application/vnd.sun.xml.calc",
	".sxd": "application/vnd.sun.xml.draw",
	".sxg": "application/vnd.sun.xml.writer.global",
	".sxi": "application/vnd.sun.xml.impress",
	".sxm": "application/vnd.sun.xml.math",
	".sxw": "application/vnd.sun.xml.writer",
	".t": "text/troff",
	".tao": "application/vnd.tao.intent-module-archive",
	".tar": "application/x-tar",
	".tcap": "application/vnd.3gpp2.tcap",
	".tcl": "application/x-tcl",
	".teacher": "application/vnd.smart.teacher",
	".tex": "application/x-tex",
	".texi": "application/x-texinfo",
	".texinfo": "application/x-texinfo",
	".text": "text/plain",
	".tfm": "application/x-tex-tfm",
	".tgz": "application/x-gzip",
	".tif": "image/tiff",
	".tiff": "image/tiff",
	".tmo": "application/vnd.tmobile-livetv",
	".torrent": "application/x-bittorrent",
	".tpl": "application/vnd.groove-tool-template",
	".tpt": "application/vnd.trid.tpt",
	".tr": "text/troff",
	".tra": "application/vnd.trueapp",
	".trm": "application/x-msterminal",
	".tsv": "text/tab-separated-values",
	".ttc": "application/x-font-ttf",
	".ttf": "application/x-font-ttf",
	".twd": "application/vnd.simtech-mindmapper",
	".twds": "application/vnd.simtech-mindmapper",
	".txd": "application/vnd.genomatix.tuxedo",
	".txf": "application/vnd.mobius.txf",
	".txt": "text/plain",
	".u32": "application/x-authorware-bin",
	".udeb": "application/x-debian-package",
	".ufd": "application/vnd.ufdl",
	".ufdl": "application/vnd.ufdl",
	".umj": "application/vnd.umajin",
	".unityweb": "application/vnd.unity",
	".uoml": "application/vnd.uoml+xml",
	".uri": "text/uri-list",
	".uris": "text/uri-list",
	".urls": "text/uri-list",
	".ustar": "application/x-ustar",
	".utz": "application/vnd.uiq.theme",
	".uu": "text/x-uuencode",
	".vcd": "application/x-cdlink",
	".vcf": "text/x-vcard",
	".vcg": "application/vnd.groove-vcard",
	".vcs": "text/x-vcalendar",
	".vcx": "application/vnd.vcx",
	".vis": "application/vnd.visionary",
	".viv": "video/vnd.vivo",
	".vor": "application/vnd.stardivision.writer",
	".vox": "application/x-authorware-bin",
	".vrml": "model/vrml",
	".vsd": "application/vnd.visio",
	".vsf": "application/vnd.vsf",
	".vss": "application/vnd.visio",
	".vst": "application/vnd.visio",
	".vsw": "application/vnd.visio",
	".vtu": "model/vnd.vtu",
	".vxml": "application/voicexml+xml",
	".w3d": "application/x-director",
	".wad": "application/x-doom",
	".wav": "audio/x-wav",
	".wax": "audio/x-ms-wax",
	".wbmp": "image/vnd.wap.wbmp",
	".wbs": "application/vnd.criticaltools.wbs+xml",
	".wbxml": "application/vnd.wap.wbxml",
	".wcm": "application/vnd.ms-works",
	".wdb": "application/vnd.ms-works",
	".wiz": "application/msword",
	".wks": "application/vnd.ms-works",
	".wm": "video/x-ms-wm",
	".wma": "audio/x-ms-wma",
	".wmd": "application/x-ms-wmd",
	".wmf": "application/x-msmetafile",
	".wml": "text/vnd.wap.wml",
	".wmlc": "application/vnd.wap.wmlc",
	".wmls": "text/vnd.wap.wmlscript",
	".wmlsc": "application/vnd.wap.wmlscriptc",
	".wmv": "video/x-ms-wmv",
	".wmx": "video/x-ms-wmx",
	".wmz": "application/x-ms-wmz",
	".wpd": "application/vnd.wordperfect",
	".wpl": "application/vnd.ms-wpl",
	".wps": "application/vnd.ms-works",
	".wqd": "application/vnd.wqd",
	".wri": "application/x-mswrite",
	".wrl": "model/vrml",
	".wsdl": "application/wsdl+xml",
	".wspolicy": "application/wspolicy+xml",
	".wtb": "application/vnd.webturbo",
	".wvx": "video/x-ms-wvx",
	".x32": "application/x-authorware-bin",
	".x3d": "application/vnd.hzn-3d-crossword",
	".xap": "application/x-silverlight-app",
	".xar": "application/vnd.xara",
	".xbap": "application/x-ms-xbap",
	".xbd": "application/vnd.fujixerox.docuworks.binder",
	".xbm": "image/x-xbitmap",
	".xdm": "application/vnd.syncml.dm+xml",
	".xdp": "application/vnd.adobe.xdp+xml",
	".xdw": "application/vnd.fujixerox.docuworks",
	".xenc": "application/xenc+xml",
	".xer": "application/patch-ops-error+xml",
	".xfdf": "application/vnd.adobe.xfdf",
	".xfdl": "application/vnd.xfdl",
	".xht": "application/xhtml+xml",
	".xhtml": "application/xhtml+xml",
	".xhvml": "application/xv+xml",
	".xif": "image/vnd.xiff",
	".xla": "application/vnd.ms-excel",
	".xlam": "application/vnd.ms-excel.addin.macroenabled.12",
	".xlb": "application/vnd.ms-excel",
	".xlc": "application/vnd.ms-excel",
	".xlm": "application/vnd.ms-excel",
	".xls": "application/vnd.ms-excel",
	".xlsb": "application/vnd.ms-excel.sheet.binary.macroenabled.12",
	".xlsm": "application/vnd.ms-excel.sheet.macroenabled.12",
	".xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
	".xlt": "application/vnd.ms-excel",
	".xltm": "application/vnd.ms-excel.template.macroenabled.12",
	".xltx": "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
	".xlw": "application/vnd.ms-excel",
	".xml": "application/xml",
	".xo": "application/vnd.olpc-sugar",
	".xop": "application/xop+xml",
	".xpdl": "application/xml",
	".xpi": "application/x-xpinstall",
	".xpm": "image/x-xpixmap",
	".xpr": "application/vnd.is-xpr",
	".xps": "application/vnd.ms-xpsdocument",
	".xpw": "application/vnd.intercon.formnet",
	".xpx": "application/vnd.intercon.formnet",
	".xsl": "application/xml",
	".xslt": "application/xslt+xml",
	".xsm": "application/vnd.syncml+xml",
	".xspf": "application/xspf+xml",
	".xul": "application/vnd.mozilla.xul+xml",
	".xvm": "application/xv+xml",
	".xvml": "application/xv+xml",
	".xwd": "image/x-xwindowdump",
	".xyz": "chemical/x-xyz",
	".zaz": "application/vnd.zzazz.deck+xml",
	".zip": "application/zip",
	".zir": "application/vnd.zul",
	".zirz": "application/vnd.zul",
	".zmm": "application/vnd.handheld-entertainment+xml"
}

const bufferExtension = [
	{
		type: "jpg",
		ext: "jpg",
		mime: "image/jpeg",
		rules: [
			{ type: "equal", start: 0, end: 3, bytes: "ffd8ff" }
		]
	},

	{
		type: "png",
		ext: "png",
		mime: "image/png",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "89504e47" }
		]
	},

	{
		type: "gif",
		ext: "gif",
		mime: "image/gif",
		rules: [
			{ type: "equal", start: 0, end: 3, bytes: "474946" }
		]
	},

	{
		type: "webp",
		ext: "webp",
		mime: "image/webp",
		rules: [
			{ type: "equal", start: 8, end: 12, bytes: "57454250" }
		]
	},

	{
		type: "flif",
		ext: "flif",
		mime: "image/flif",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "464c4946" }
		]
	},

	{
		type: "cr2",
		ext: "cr2",
		mime: "image/x-canon-cr2",
		rules: [
			{
				type: "and", rules:
					[
						{
							type: "or", rules:
								[
									{ type: "equal", start: 0, end: 4, bytes: "49492a00" },
									{ type: "equal", start: 0, end: 4, bytes: "4d4d002a" }
								]
						},
						{ type: "equal", start: 8, end: 10, bytes: "4352" }
					]
			}
		]
	},

	{
		type: "tif",
		ext: "tif",
		mime: "image/tiff",
		rules: [
			{
				type: "and", rules:
					[
						{
							type: "or", rules:
								[
									{ type: "equal", start: 0, end: 4, bytes: "49492a00" },
									{ type: "equal", start: 0, end: 4, bytes: "4d4d002a" }
								]
						},
						{ type: "notEqual", start: 8, end: 10, bytes: "4352" }
					]
			}
		]
	},

	{
		type: "bmp",
		ext: "bmp",
		mime: "image/bmp",
		rules: [
			{ type: "equal", start: 0, end: 2, bytes: "424d" }
		]
	},

	{
		type: "jxr",
		ext: "jxr",
		mime: "image/vnd.ms-photo",
		rules: [
			{ type: "equal", start: 0, end: 3, bytes: "4949bc" }
		]
	},

	{
		type: "psd",
		ext: "psd",
		mime: "image/vnd.adobe.photoshop",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "38425053" }
		]
	},

	{
		type: "zip",
		ext: "zip",
		mime: "application/zip",
		rules: [
			{ type: "equal", start: 0, end: 2, bytes: "504b" },
			{
				type: "or", rules:
					[
						{ type: "equal", start: 2, end: 3, bytes: "03" },
						{ type: "equal", start: 2, end: 3, bytes: "05" },
						{ type: "equal", start: 2, end: 3, bytes: "07" }
					]
			},
			{
				type: "or", rules:
					[
						{ type: "equal", start: 3, end: 4, bytes: "04" },
						{ type: "equal", start: 3, end: 4, bytes: "06" },
						{ type: "equal", start: 3, end: 4, bytes: "08" }
					]
			},
			{ type: "notEqual", start: 36, end: 58, bytes: "70656170706c69636174696f6e2f657075622b7a6970" },
			{ type: "notEqual", start: 30, end: 50, bytes: "4d4554412d494e462f6d6f7a696c6c612e727361" }
		]
	},

	{
		type: "epub",
		ext: "epub",
		mime: "application/epub+zip",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "504b0304" },
			{ type: "equal", start: 36, end: 58, bytes: "70656170706c69636174696f6e2f657075622b7a6970" }
		]
	},

	{
		type: "xpi",
		ext: "xpi",
		mime: "application/x-xpinstall",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "504b0304" },
			{ type: "equal", start: 30, end: 50, bytes: "4d4554412d494e462f6d6f7a696c6c612e727361" }
		]
	},

	{
		type: "tar",
		ext: "tar",
		mime: "application/x-tar",
		rules: [
			{ type: "equal", start: 257, end: 262, bytes: "7573746172" }
		]
	},

	{
		type: "rar",
		ext: "rar",
		mime: "application/x-rar-compressed",
		rules: [
			{ type: "equal", start: 0, end: 6, bytes: "526172211a07" },
			{
				type: "or", rules:
					[
						{ type: "equal", start: 6, end: 7, bytes: "00" },
						{ type: "equal", start: 6, end: 7, bytes: "01" }
					]
			}
		]
	},

	{
		type: "gz",
		ext: "gz",
		mime: "application/gzip",
		rules: [
			{ type: "equal", start: 0, end: 3, bytes: "1f8b08" }
		]
	},

	{
		type: "bz2",
		ext: "bz2",
		mime: "application/x-bzip2",
		rules: [
			{ type: "equal", start: 0, end: 3, bytes: "425a68" }
		]
	},

	{
		type: "7z",
		ext: "7z",
		mime: "application/x-7z-compressed",
		rules: [
			{ type: "equal", start: 0, end: 6, bytes: "377abcaf271c" }
		]
	},

	{
		type: "dmg",
		ext: "dmg",
		mime: "application/x-apple-diskimage",
		rules: [
			{ type: "equal", start: 0, end: 2, bytes: "7801" }
		]
	},

	{
		type: "mov",
		ext: "mov",
		mime: "video/quicktime",
		rules: [
			{
				type: "or",
				rules: [
					{ type: "equal", start: 4, end: 12, bytes: "6674797071742020", "desc": "ftypqt  " },
					{ type: "equal", start: 4, end: 8, bytes: "6d6f6f76", "desc": "moov" },
					{ type: "equal", start: 4, end: 8, bytes: "66726565", "desc": "free" },
					{ type: "equal", start: 4, end: 8, bytes: "6d646174", "desc": "mdat" },
					{ type: "equal", start: 4, end: 8, bytes: "77696465", "desc": "wide" },
					{ type: "equal", start: 4, end: 8, bytes: "706e6f74", "desc": "pnot" },
					{ type: "equal", start: 4, end: 8, bytes: "736b6970", "desc": "skip" }
				]
			}
		],
		"desc": "must come before mp4"
	},

	{
		type: "mp4",
		ext: "mp4",
		mime: "video/mp4",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 4, bytes: "33677035", "desc": "3gp5" },
						{
							type: "and", rules:
								[
									{ type: "equal", start: 0, end: 3, bytes: "000000" },
									{ type: "equal", start: 4, end: 8, bytes: "66747970", "desc": "ftyp" },
									{
										type: "or", rules:
											[
												{ type: "equal", start: 8, end: 12, bytes: "6d703431", "desc": "mp41" },
												{ type: "equal", start: 8, end: 12, bytes: "6d703432", "desc": "mp42" },
												{ type: "equal", start: 8, end: 12, bytes: "69736f6d", "desc": "isom" },
												{ type: "equal", start: 8, end: 12, bytes: "69736f32", "desc": "iso2" },
												{ type: "equal", start: 8, end: 12, bytes: "6d6d7034", "desc": "mmp4" },

												{
													type: "and", rules: [
														{ type: "equal", start: 8, end: 11, bytes: "4d3456", "desc": "M4V" },
														{ type: "equal", start: 16, end: 24, bytes: "4d3456204d344120", "desc": "M4V M4A " }
													], "desc": "m4v+m4a, extension is default mp4"
												},

												{
													type: "equal", start: 8, end: 11, bytes: "4d3456", "desc": "M4V",
													ext: "m4v", mime: "video/mp4"
												},

												{
													type: "equal", start: 8, end: 11, bytes: "4d3441", "desc": "M4A",
													ext: "m4a", mime: "audio/mp4"
												},

												{
													type: "equal", start: 8, end: 11, bytes: "4d3450", "desc": "M4P",
													ext: "mp4", mime: "audio/mp4a-latm"
												},

												{
													type: "equal", start: 8, end: 11, bytes: "4d3442", "desc": "M4B",
													ext: "mp4", mime: "audio/mp4a-latm"
												},

												{
													type: "equal", start: 8, end: 11, bytes: "336732", "desc": "3g2",
													ext: "3g2", mime: "video/3gpp2"
												},

												{
													type: "equal", start: 8, end: 10, bytes: "3367", "desc": "3g",
													ext: "3gp", mime: "video/3gpp"
												},

												{ type: "equal", start: 8, end: 12, bytes: "64617368", "desc": "dash" },

												{ type: "default", mime: "video/mpeg4-generic" }
											]
									}
								]
						}
					]
			}
		]
	},

	{
		type: "riff",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "52494646", "desc": "RIFF" },
			{
				type: "or", rules:
					[
						{
							type: "equal", start: 8, end: 11, bytes: "415649", "desc": "AVI",
							ext: "avi", mime: "video/x-msvideo"
						},
						{
							type: "equal", start: 8, end: 12, bytes: "57415645", "desc": "WAVE",
							ext: "wav", mime: "audio/x-wav"
						},
						{
							type: "equal", start: 8, end: 12, bytes: "514c434d", "desc": "QLCM",
							ext: "qcp", mime: "audio/qcelp"
						}
					]
			}
		]
	},

	{
		type: "mid",
		ext: "mid",
		mime: "audio/midi",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "4d546864" }
		]
	},

	{
		type: "mkv",
		ext: "mkv",
		mime: "video/x-matroska",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "1a45dfa3" },
			{
				type: "or",
				"search": { "id": 1, start: 4, end: 4096, bytes: "4282" },
				rules:
					[
						{ type: "equal", "search_ref": 1, start: 3, end: 11, bytes: "6d6174726f736b61", "desc": "matroska" },
						{
							type: "equal", "search_ref": 1, start: 3, end: 7, bytes: "7765626d", "desc": "Webm",
							ext: "webm",
							mime: "video/webm"
						}
					]
			}
		]
	},

	{
		type: "wasm",
		ext: "wasm",
		mime: "application/wasm",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "0061736d" }
		]
	},

	{
		type: "asf",
		ext: "asf",
		mime: "application/vnd.ms-asf",
		rules: [
			{ type: "equal", start: 0, end: 10, bytes: "3026b2758e66cf11a6d9" },
			{
				type: "or", rules:
					[
						{
							type: "and", rules: [
								{ type: "contains", start: 10, end: 1024, bytes: "409e69f84d5bcf11a8fd00805f5c442b" },
								{ type: "contains", start: 10, end: 1024, bytes: "c0ef19bc4d5bcf11a8fd00805f5c442b" }
							],
							ext: "wmv",
							mime: "video/x-ms-asf"
						},
						{
							type: "contains", start: 10, end: 1024, bytes: "409e69f84d5bcf11a8fd00805f5c442b",
							ext: "wma",
							mime: "audio/x-ms-wma"
						},
						{
							type: "contains", start: 10, end: 1024, bytes: "c0ef19bc4d5bcf11a8fd00805f5c442b",
							ext: "wmv",
							mime: "video/x-ms-wmv"
						},
						{ type: "default", "desc": "fallback to generic asf" }
					]
			}
		]
	},

	{
		type: "mpg",
		ext: "mpg",
		mime: "video/mpeg",
		rules: [
			{ type: "equal", start: 0, end: 3, bytes: "000001" },
			{
				type: "or", rules:
					[
						{ type: "equal", start: 3, end: 4, bytes: "b0" },
						{ type: "equal", start: 3, end: 4, bytes: "b1" },
						{ type: "equal", start: 3, end: 4, bytes: "b2" },
						{ type: "equal", start: 3, end: 4, bytes: "b3" },
						{ type: "equal", start: 3, end: 4, bytes: "b4" },
						{ type: "equal", start: 3, end: 4, bytes: "b5" },
						{ type: "equal", start: 3, end: 4, bytes: "b6" },
						{ type: "equal", start: 3, end: 4, bytes: "b7" },
						{ type: "equal", start: 3, end: 4, bytes: "b8" },
						{ type: "equal", start: 3, end: 4, bytes: "b9" },
						{ type: "equal", start: 3, end: 4, bytes: "ba" },
						{ type: "equal", start: 3, end: 4, bytes: "bb" },
						{ type: "equal", start: 3, end: 4, bytes: "bc" },
						{ type: "equal", start: 3, end: 4, bytes: "bd" },
						{ type: "equal", start: 3, end: 4, bytes: "be" },
						{ type: "equal", start: 3, end: 4, bytes: "bf" }
					]
			}
		]
	},

	{
		type: "mp3",
		ext: "mp3",
		mime: "audio/mpeg",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 3, bytes: "494433" },
						{ type: "equal", start: 0, end: 2, bytes: "fffb" }
					]
			}
		]
	},

	{
		type: "opus",
		ext: "opus",
		mime: "audio/opus",
		rules: [
			{ type: "equal", start: 28, end: 36, bytes: "4f70757348656164" }
		]
	},

	{
		type: "ogg",
		ext: "ogg",
		mime: "audio/ogg",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "4f676753", "desc": "OggS" },
			{
				type: "or", rules:
					[
						{
							type: "equal", start: 28, end: 35, bytes: "807468656f7261", "desc": "\u0080theora",
							ext: "ogv", mime: "video/ogg"
						},
						{
							type: "equal", start: 28, end: 35, bytes: "01766964656f00", "desc": "\u0001video\u0000",
							ext: "ogm", mime: "video/ogg"
						},
						{
							type: "equal", start: 28, end: 33, bytes: "7f464c4143", "desc": "FLAC",
							ext: "oga", mime: "audio/ogg"
						},
						{
							type: "equal", start: 28, end: 35, bytes: "53706565782020", "desc": "Speex  ",
							ext: "spx", mime: "audio/ogg"
						},
						{
							type: "equal", start: 28, end: 35, bytes: "01766f72626973", "desc": "\u0001vorbis",
							ext: "ogg", mime: "audio/ogg"
						},
						{ type: "default", ext: "ogx", mime: "application/ogg" }
					]
			},
			{ type: "notEqual", start: 28, end: 36, bytes: "4f70757348656164" }
		]
	},

	{
		type: "flac",
		ext: "flac",
		mime: "audio/x-flac",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "664c6143" }
		]
	},

	{
		type: "ape",
		ext: "ape",
		mime: "audio/ape",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "4d414320" }
		]
	},

	{
		type: "wv",
		ext: "wv",
		mime: "audio/wavpack",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "7776706b" }
		]
	},

	{
		type: "amr",
		ext: "amr",
		mime: "audio/amr",
		rules: [
			{ type: "equal", start: 0, end: 6, bytes: "2321414d520a" }
		]
	},

	{
		type: "pdf",
		ext: "pdf",
		mime: "application/pdf",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "25504446" }
		]
	},

	{
		type: "exe",
		ext: "exe",
		mime: "application/x-msdownload",
		"iana": "application/vnd.microsoft.portable-executable",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 2, bytes: "4d5a" },
						{ type: "equal", start: 0, end: 2, bytes: "4d7a" },
						{ type: "equal", start: 0, end: 2, bytes: "6d7a" },
						{ type: "equal", start: 0, end: 2, bytes: "6d5a" }
					]
			}
		]
	},

	{
		type: "swf",
		ext: "swf",
		mime: "application/x-shockwave-flash",
		"iana": "application/vnd.adobe.flash.movie",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 1, bytes: "43" },
						{ type: "equal", start: 0, end: 1, bytes: "46" }
					]
			},
			{ type: "equal", start: 1, end: 3, bytes: "5753" }
		]
	},

	{
		type: "rtf",
		ext: "rtf",
		mime: "application/rtf",
		rules: [
			{ type: "equal", start: 0, end: 5, bytes: "7b5c727466" }
		]
	},

	{
		type: "woff",
		ext: "woff",
		mime: "application/font-woff",
		"iana": "font/woff",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "774f4646" },
			{
				type: "or", rules:
					[
						{ type: "equal", start: 4, end: 8, bytes: "00010000" },
						{ type: "equal", start: 4, end: 8, bytes: "4f54544f" }
					]
			}
		]
	},

	{
		type: "woff2",
		ext: "woff2",
		mime: "application/font-woff",
		"iana": "font/woff2",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "774f4632" },
			{
				type: "or", rules:
					[
						{ type: "equal", start: 4, end: 8, bytes: "00010000" },
						{ type: "equal", start: 4, end: 8, bytes: "4f54544f" }
					]
			}
		]
	},

	{
		type: "eot",
		ext: "eot",
		mime: "application/vnd.ms-fontobject",
		rules: [
			{ type: "equal", start: 34, end: 36, bytes: "4c50" },
			{
				type: "or", rules:
					[
						{ type: "equal", start: 8, end: 11, bytes: "000001" },
						{ type: "equal", start: 8, end: 11, bytes: "010002" },
						{ type: "equal", start: 8, end: 11, bytes: "020002" }
					]
			}
		]
	},

	{
		type: "ttf",
		ext: "ttf",
		mime: "application/font-sfnt",
		"iana": "font/ttf",
		rules: [
			{ type: "equal", start: 0, end: 5, bytes: "0001000000" }
		]
	},

	{
		type: "otf",
		ext: "otf",
		mime: "application/font-sfnt",
		"iana": "font/otf",
		rules: [
			{ type: "equal", start: 0, end: 5, bytes: "4f54544f00" }
		]
	},

	{
		type: "ico",
		ext: "ico",
		mime: "image/x-icon",
		"iana": "image/vnd.microsoft.icon",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "00000100" }
		]
	},

	{
		type: "cur",
		ext: "cur",
		mime: "image/x-icon",
		"iana": "image/vnd.microsoft.icon",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "00000200" }
		]
	},

	{
		type: "flv",
		ext: "flv",
		mime: "video/x-flv",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "464c5601" }
		]
	},

	{
		type: "ps",
		ext: "ps",
		mime: "application/postscript",
		rules: [
			{ type: "equal", start: 0, end: 2, bytes: "2521" }
		]
	},

	{
		type: "xz",
		ext: "xz",
		mime: "application/x-xz",
		rules: [
			{ type: "equal", start: 0, end: 6, bytes: "fd377a585a00" }
		]
	},

	{
		type: "sqlite",
		ext: "sqlite",
		mime: "application/x-sqlite3",
		"iana": "application/vnd.sqlite3",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "53514c69" }
		]
	},

	{
		type: "nes",
		ext: "nes",
		mime: "application/x-nintendo-nes-rom",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "4e45531a" }
		]
	},

	{
		type: "dex",
		ext: "dex",
		mime: "application/x-dex",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "6465780a" }
		]
	},

	{
		type: "crx",
		ext: "crx",
		mime: "application/x-google-chrome-extension",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "43723234" }
		]
	},

	{
		type: "elf",
		ext: "elf",
		mime: "application/x-executable",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "7f454c46" }
		]
	},

	{
		type: "cab",
		ext: "cab",
		mime: "application/vnd.ms-cab-compressed",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 4, bytes: "4d534346" },
						{ type: "equal", start: 0, end: 4, bytes: "49536328" }
					]
			}
		]
	},

	{
		type: "deb",
		ext: "deb",
		mime: "application/x-deb",
		rules: [
			{ type: "equal", start: 0, end: 21, bytes: "213c617263683e0a64656269616e2d62696e617279" }
		]
	},

	{
		type: "ar",
		ext: "ar",
		mime: "application/x-unix-archive",
		rules: [
			{ type: "equal", start: 0, end: 7, bytes: "213c617263683e" },
			{ type: "notEqual", start: 0, end: 21, bytes: "213c617263683e0a64656269616e2d62696e617279" }
		]
	},

	{
		type: "rpm",
		ext: "rpm",
		mime: "application/x-rpm",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "edabeedb" }
		]
	},

	{
		type: "Z",
		ext: "Z",
		mime: "application/x-compress",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 2, bytes: "1fa0" },
						{ type: "equal", start: 0, end: 2, bytes: "1f9d" }
					]
			}
		]
	},

	{
		type: "lz",
		ext: "lz",
		mime: "application/x-lzip",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "4c5a4950" }
		]
	},

	{
		type: "msi",
		ext: "msi",
		mime: "application/x-msi",
		rules: [
			{ type: "equal", start: 0, end: 8, bytes: "d0cf11e0a1b11ae1" }
		]
	},

	{
		type: "mxf",
		ext: "mxf",
		mime: "application/mxf",
		rules: [
			{ type: "equal", start: 0, end: 14, bytes: "060e2b34020501010d0102010102" }
		]
	},

	{
		type: "mts",
		ext: "mts",
		mime: "video/mp2t",
		rules: [
			{
				type: "and", rules:
					[
						{ type: "equal", start: 4, end: 5, bytes: "47" },
						{
							type: "or", rules:
								[
									{ type: "equal", start: 192, end: 193, bytes: "47" },
									{ type: "equal", start: 196, end: 197, bytes: "47" }
								]
						}
					]
			}
		]
	},

	{
		type: "blend",
		ext: "blend",
		mime: "application/x-blender",
		rules: [
			{ type: "equal", start: 0, end: 7, bytes: "424c454e444552", "desc": "BLENDER" }
		]
	},

	{
		type: "bpg",
		ext: "bpg",
		mime: "image/bpg",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "425047fb" }
		]
	},

	{
		type: "jpeg-2000",
		rules: [
			{
				type: "and", rules: [
					{ type: "equal", start: 0, end: 12, bytes: "0000000c6a5020200d0a870a" },
					{
						type: "or", rules: [

							{
								type: "equal", start: 20, end: 24, bytes: "6a703220",
								ext: "jp2", mime: "image/jp2"
							},

							{
								type: "equal", start: 20, end: 24, bytes: "6a707820",
								ext: "jpx", mime: "image/jpx"
							},

							{
								type: "equal", start: 20, end: 24, bytes: "6a706d20",
								ext: "jpm", mime: "image/jpm"
							},

							{
								type: "equal", start: 20, end: 24, bytes: "6d6a7032",
								ext: "mj2", mime: "image/mj2"
							}

						]
					}
				]
			}
		]
	},

	{
		type: "aif",
		ext: "aif",
		mime: "audio/aiff",
		rules: [
			{ type: "equal", start: 0, end: 4, bytes: "464f524d" }
		]
	},

	{
		type: "svg",
		ext: "svg",
		mime: "image/svg+xml",
		rules: [
			{
				type: "or", "recode_text": true, rules:
					[
						{ type: "equal", start: 0, end: 4, bytes: "3c737667", "desc": "<svg" },
						{
							type: "and", rules:
								[
									{ type: "equal", start: 0, end: 6, bytes: "3c3f786d6c20", "desc": "<?xml " },
									{ type: "contains", bytes: "3c737667", "desc": "<svg" }
								]
						}
					]
			}
		]
	},

	{
		type: "xml",
		ext: "xml",
		mime: "application/xml",
		"recode_text": true,
		rules: [
			{ type: "equal", start: 0, end: 6, bytes: "3c3f786d6c20", "desc": "<?xml " }
		]
	},

	{
		type: "mobi",
		ext: "mobi",
		mime: "application/x-mobipocket-ebook",
		rules: [
			{ type: "equal", start: 60, end: 68, bytes: "424f4f4b4d4f4249" }
		]
	},

	{
		type: "heic",
		rules: [
			{
				type: "and", rules:
					[
						{ type: "equal", start: 4, end: 8, bytes: "66747970" },
						{
							type: "or", rules:
								[
									{
										type: "equal", start: 8, end: 12, bytes: "6d696631",
										ext: "heic", mime: "image/heif"
									},

									{
										type: "equal", start: 8, end: 12, bytes: "6d736631",
										ext: "heic", mime: "image/heif-sequence"
									},

									{
										type: "or", rules:
											[
												{ type: "equal", start: 8, end: 12, bytes: "68656963" },
												{ type: "equal", start: 8, end: 12, bytes: "68656978" }
											], ext: "heic", mime: "image/heic"
									},

									{
										type: "or", rules:
											[
												{ type: "equal", start: 8, end: 12, bytes: "68657663" },
												{ type: "equal", start: 8, end: 12, bytes: "68657678" }
											], ext: "heic", mime: "image/heic-sequence"
									}
								]
						}
					]
			}
		]
	},

	{
		type: "ktx",
		ext: "ktx",
		mime: "image/ktx",
		rules: [
			{ type: "equal", start: 0, end: 12, bytes: "ab4b5458203131bb0d0a1a0a" }
		]
	},

	{
		type: "dcm",
		ext: "dcm",
		mime: "application/dicom",
		rules: [
			{ type: "equal", start: 128, end: 132, bytes: "4449434d" }
		]
	},

	{
		type: "mpc",
		ext: "mpc",
		mime: "audio/x-musepack",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 3, bytes: "4d502b" },
						{ type: "equal", start: 0, end: 4, bytes: "4d50434b" }
					]
			}
		]
	},

	{
		type: "ics",
		ext: "ics",
		mime: "text/calendar",
		"recode_text": true,
		rules: [
			{ type: "equal", start: 0, end: 6, bytes: "424547494e3a" }
		]
	},

	{
		type: "glb",
		ext: "glb",
		mime: "model/gltf-binary",
		rules: [
			{ type: "equal", start: 0, end: 8, bytes: "676c544602000000" }
		]
	},

	{
		type: "pcap",
		ext: "pcap",
		mime: "application/vnd.tcpdump.pcap",
		rules: [
			{
				type: "or", rules:
					[
						{ type: "equal", start: 0, end: 4, bytes: "d4c3b2a1" },
						{ type: "equal", start: 0, end: 4, bytes: "a1b2c3d4" }
					]
			}
		]
	},

	{
		type: "html",
		ext: "html",
		mime: "text/html",
		rules: [
			{
				type: "or", "recode_text": true, rules:
					[
						{ type: "contains", bytes: "3c68746d6c" },
						{ type: "contains", bytes: "3c00680074006d006c00" }
					]
			}
		]
	}
]

interface Rule{
	type: string,
	start: Number|undefined,
	end: Number|undefined,
	bytes: string|undefined,
	rules: []|undefined
}

export default class MimeHelper {
	getMimeByExtension(extension: string): string {
		return mimetype[extension];
	}

	getExtensionByMime(mime: string): string | boolean {
		let extension: string | boolean = false;
		for (const key in mimetype) {
			if (mimetype[key] === mime) {
				extension = key;
			}
		}
		return extension;
	}

	getExtensionByBuffer(buffer: Buffer): string | boolean{
		let extension: string | boolean = false;
		const bufferHex = Buffer.from(buffer).toString("hex");
		bufferExtension.forEach((_ext) => {
			const { mime, rules, ext } = _ext;
			rules.forEach((rule) => {
				const { type } = rule;
				if(type === "equal"){
					if(rule.start !== undefined && rule.end !== undefined && rule.bytes !== undefined && bufferHex.substr(rule.start, (rule.end * 2)) == rule.bytes){
						extension = ext ? `.${ext}` : false;
					}
				}
			});
		});
		return extension;
	}
}
