/*
 * Routines for managing persistent storage of port mappings, etc.
 *
 * $Copyright Open Broadcom Corporation$
 *
 * $Id: nvparse.h,v 1.9.20.1 2003/10/16 21:26:01 mthawani Exp $
 */

#ifndef _nvparse_h_
#define _nvparse_h_

/* 256 entries per list */
#define MAX_NVPARSE 256

/* 
 * Automatic (application specific) port forwards are described by a
 * netconf_app_t structure. A specific outbound connection triggers
 * the expectation of one or more inbound connections which may be
 * optionally remapped to a different port range.
 */
extern bool valid_autofw_port(const netconf_app_t *app);
extern bool get_autofw_port(int which, netconf_app_t *app);
extern bool set_autofw_port(int which, const netconf_app_t *app);
extern bool del_autofw_port(int which);

/* 
 * Persistent (static) port forwards are described by a netconf_nat_t
 * structure. On Linux, a netconf_filter_t that matches the target
 * parameters of the netconf_nat_t should also be added to the INPUT
 * and FORWARD tables to ACCEPT the forwarded connection.
 */
extern bool valid_forward_port(const netconf_nat_t *nat);
extern bool get_forward_port(int which, netconf_nat_t *nat);
extern bool set_forward_port(int which, const netconf_nat_t *nat);
extern bool del_forward_port(int which);

/* 
 * Client filters are described by two netconf_filter_t structures that
 * differ in match.src.ipaddr alone (to support IP address ranges)
 */
extern bool valid_filter_client(const netconf_filter_t *start, const netconf_filter_t *end);
extern bool get_filter_client(int which, netconf_filter_t *start, netconf_filter_t *end);
extern bool set_filter_client(int which, const netconf_filter_t *start, const netconf_filter_t *end);
extern bool del_filter_client(int which);

/* Conversion routine for deprecated variables */
extern void convert_deprecated(void);

#endif /* _nvparse_h_ */
