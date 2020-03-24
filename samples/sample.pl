#!/usr/bin/perl
# Sample file to test css

# Shout out to Better Comments https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments
# This is a regular comment
# ! This is an important comment
# * This is a highlighted comment
# ? Is this a question comment?
# TODO: write a todo comment

use strict;
use warnings;

sub hello {
  my ($greeting) = @_;
  print "$greeting->{salutation}, World!\n";
}

my $greeting = {
  salutation => 'Hello'
};

hello($greeting);

exit;
