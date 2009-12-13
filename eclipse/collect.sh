#!/bin/sh
CVSROOT=:pserver:anonymous@dev.eclipse.org:/cvsroot/eclipse
export CVSROOT
mkdir -p eclipse
cd eclipse
cvs -q co org.eclipse.debug.ui/icons
cvs -q co org.eclipse.pde.ui/icons
cvs -q co org.eclipse.jdt.ui/icons
cvs -q co org.eclipse.vcm.ui/icons
cvs -q co org.eclipse.team.ui/icons
cvs -q co org.eclipse.ant.ui/icons
cvs -q co org.eclipse.help.ui/icons
cvs -q co org.eclipse.ui/icons
cvs -q co org.eclipse.ui.views/icons
cvs -q co org.eclipse.ui.console/icons
cd ..
rm -f ./eclipse-icons.zip
find eclipse -name &quot;*.gif&quot; -print | zip ./eclipse-icons.zip -@ 
