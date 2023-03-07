interface RfcData {
    title: string,
    no: string
}

interface CommRfcData {
    title: string,
    rfcs: RfcData[]
}

export const rfcs: CommRfcData[] = [{
    title: 'Application Layer',
    rfcs: [
        {title: 'FTP', no:'959'}, {title: 'TFTP', no:'1350'},
        {title: 'HTTP/1.0', no:'1945'}, {title: 'HTTP/1.1', no:'2616'}, {title: 'HTTPS', no: '2818'}, {title: 'HTML', no: '1866'},
        {title: 'SMTP', no: '821'}, {title: 'Internet Messages', no: '822'}, {title: 'MIME - Format', no: '2045'}, {title: 'MIME - Media Type', no: '2046'}, {title: 'MIME - Header', no: '2047'}, {title: 'MIME - Registration', no: '2048'}, {title: 'MIME - Conformance', no: '2049'}, {title: 'POP3', no: '1939'},
        {title: 'TELNET PROTOCOL', no: '854'}, {title: 'TELNET OPTION', no: '855'}, {title: 'SNMP', no: '1157'}, {title: 'DNS - CONCEPTS', no: '1034'}, {title: 'DNS - IMPLEMENTATION', no: '1035'}, {title: 'BOOTP', no: '1542'}, {title: 'DHCP', no: '2131'}, {title: 'DHCP Options', no: '2132'},
        {title: 'URL', no: '1738'}
    ]
}, {
    title: 'Transport Layer',
    rfcs: [
        {title: 'UDP', no: '768'}, {title: 'TCP', no: '793'}, {title: 'TCP - Congestion Control', no: '896'}, {title: 'TCP Congestion Control', no: '2581'}
    ]
}, {
    title: 'IP Layer',
    rfcs: [
        {title: 'IPv4', no: '791'}, {title: 'IPv4 - Subnetting', no: '950'}, {title: 'CIDR', no: '1519'}, {title: 'IPv6', no: '2460'},
        {title: 'ARP', no: '826'}, {title: 'RARP', no: '903'},
        {title: 'ICMPv4', no: '792'}, {title: 'ICMPv6', no: '2463'},
        {title: 'RIPv2', no: '2453'}, {title: 'OSPFv2', no: '2328'}, {title: 'BGPv4', no: '1771'},
        {title: 'NAT - Terminology', no: '2663'}, {title: 'NAT - Architectural', no: '2993'}, {title: 'NAT - Traditional', no: '3022'}, {title: 'NAT - Complications', no: '3027'}, {title: 'NAT - FADG.', no: '3235'},
        {title: 'IPv6 - Packet Tunneling', no: '2473'}, {title: 'IPv6 over IPv4', no: '2529'}, {title: 'IPv6 - Transition', no: '2893'}, {title: 'IPv6 via IPv4', no: '3056'},
    ]
}, {
    title: 'Network Layer',
    rfcs: [
        {title: 'PPP', no: '1661'}, {title: 'IPCP', no: '1332'}, {title: 'PAP', no: '1334'}, {title: 'CHAP', no: '1994'},
    ]
}, {
    title: 'Extra',
    rfcs: [
        {title: 'INTERNET NUMBERS', no: '1166'},
        {title: 'MD5', no: '1321'}
    ]
}]
