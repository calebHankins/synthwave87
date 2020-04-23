#!/usr/bin/env bash
# Shout out to Better Comments https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
# This is a regular comment
# ! This is an important comment
# * This is a highlighted comment
# ? Is this a question comment?
# TODO: write a todo comment
# // This is a strike comment */
# # This is a pound comment

SALUTATION=Hello
TIME=`date`
WHO=`whoami`

echo "${SALUTATION}, $WHO!" It is $TIME 👋

exit